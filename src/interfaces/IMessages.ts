export interface Sender {
	id: string
	title: string
	name: string
	avatar: string
	bio: string
	location: string
	verified: number
	following: number
	followers: number
	listed: number
	favourites: number
	messages: number
	influence: number
}

export interface Topic {
	topic: string
	sentiment: number
}

export interface Dynamics {
	uniquecomments: number
	engagement: number
	likesandvotes: number
	viewcount: number
	inboundlinks: number
	forumthread: number
	shares: number
	favourite: number
}

export interface Geo {
	latitude: number
	longitude: number
	zip: string
	street: string
	city: string
	country: string
}

export interface Medium {
	type: string
	url: string
	width: number
	height: number
}

export interface Message {
	id: string
	published: string
	harvested: string
	utc: number
	channel: string
	type: string
	sender: Sender
	reply: string
	replyto: string
	page: string
	conversation: string
	title: string
	content: string
	sentiment: number
	link: string
	language: string
	region: string
	topics: Topic[]
	dynamics?: Dynamics
	geo?: Geo
	media?: Medium[]
}

export interface IMessages {
	success?: boolean
	message?: string
	data?: Message[]
}
