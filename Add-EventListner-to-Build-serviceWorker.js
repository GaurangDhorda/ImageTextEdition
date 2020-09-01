/*
    copy below code to Build/service-worker.js...
*/

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'POST' ){
     console.log('handle-function-NOT called ', event);
     event.respondWith(fetch(event.request));
     return;
    }
   handleFileShare(event);
   });
   
   function handleFileShare(event) {
    // event.respondWith(Response.redirect('./'));
     event.waitUntil (async function (){
       const data = await event.request.formData();
       const client = await self.clients.get(event.resultingClientId);
       const file = data.get('file');
       client.postMessage({file});
     }());
   }