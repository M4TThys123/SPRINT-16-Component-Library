import createClient from '$lib/utils/prismicio';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params, request }) {
    const { uid } = params;
    const client = createClient({ fetch, request });
    const document = await client.getByUID('docs', uid);
    console.log(`UID fetch werkt`)

    if (document) {
        return { document };
    }

    error(404, 'Not found');
}

// import createClient from "$lib/vendors/prismicClient.js";
//
// export async function load({ fetch, request }) {
//   const client = createClient({ fetch, request })
//   const documents = await client.getAllByType('docs')
//
//
//
//     if (documents) {
//         return {
//           documents
//         }
//     }
//
//     return {
//         status: 404,
//     }
// }