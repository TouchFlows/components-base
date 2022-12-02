import { Component, h, Prop, Element, Method, State, Watch, Host, Listen, Event, EventEmitter } from '@stencil/core';
import { getIDBKey } from '../../utils/utils';
import { Message } from '../../interfaces/IMessages';

@Component({
	tag: 'component-template',
	styleUrl: 'component-template.css',
	shadow: true,
})
export class ComponentTemplate {

	@Element() el: HTMLElement

	@Event({eventName: 'subscribe', bubbles: true, composed: true}) subscribe: EventEmitter<any>;

	@Method() public async setData(data: any) {
    if (data.data.length === 0) {
      return
    }
    let myData = structuredClone(data.data)

    this.state = {
      ...this.state,
      data: myData
    }
  }

	@Listen('topic-update', {target: 'document'})
  async idbHandler(ev: CustomEvent){    
    if(ev.detail.topics == this.dataTopics && ev.detail.type ==this.dataType) {
      await getIDBKey(`${this.el.dataset.type}.${this.el.dataset.topics}`)
      .then(data => {
        console.debug('topic-update ',this.el.tagName.toLowerCase(), data)
        this.setData(data)
      })
    }
  }

	@Prop({ mutable: true, reflect: true }) public dataTopics?: string

	@Prop() public dataType?: 'cloud' | 'messages' | 'indicator' | 'proxy' = 'messages'

	@State() state: {
    data: any
  }

	@Watch('dataTopics')
	dataTopicsChanged(){}

	async connectedCallback(){
		this.state = {
			data: []
		}
		console.debug('subscribing ' + this.el.tagName.toLowerCase(), this.el.dataset)
    this.subscribe.emit(this.el.dataset);
	}

	render() {
		const { data } = this.state
		if(data.length === 0) return
		console.debug(data)
		return (
			<Host>
				<div class="container">
				{data.map((message: Message) => {
					return <div class="white">{message.id}: {message.title}</div>
				})}
				</div>
			</Host>
		);
	}
}