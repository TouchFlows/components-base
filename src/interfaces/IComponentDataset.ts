export interface IComponentDataset {
	topics?: string
	type: 'cloud' | 'messages' | 'indicators' | 'proxy'
	media?: number
	dynamics?: number
	geo?: number
	delay?: string
	approved?: string
	moderation?: 'realtime' | 'delayed' | 'approved'
}
