export default function(alt,storage,storageName){
    try{
        alt.bootstrap(storage.get(storageName));
    }catch(error){
        console.log('Failed to bootstrap',error)
    }
    alt.FinalStore.listen(() => {
        if(!storage.get('debug')){
            storage.set(storageName, alt.takeSnapshot());
        }
    });
}