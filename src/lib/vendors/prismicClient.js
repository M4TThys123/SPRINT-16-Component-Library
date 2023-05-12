import * as prismic from "@prismicio/client"

const repositoryName = "cmd-minor"

const createClient = (params) => {
	const client = prismic.createClient(repositoryName, params)
	console.log('de fetch werkt')
	console.log(client)

	return client
}

export default createClient


// import * as prismic from '@prismicio/client'
//
// const repositoryName = 'lose-your-head-the-client-case'
//
// const createClient = ({request, fetch}) => {
// 	const clientOptions = {
// 		fetch
// 	}
// 	const client = prismic.createClient(repositoryName, clientOptions)
//
// 	if (request) {
// 		client.enableAutoPreviewsFromReq(request);
// 	}
//
// 	return client
// }
//
// export default createClient