import sanityClient from '@sanity/client';


export const sanClient = sanityClient({
    projectId: 's4x0hxaq',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true
});