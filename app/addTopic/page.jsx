export default function AddTopic() {
    return <form className="flex flex-col gap-3"> 
        <input className="border border-slate-500 px-8 py-2" type="text"  placeholder="Topic Title"/>
    
    <input className="boarder border-slate-500 px-8 py-2 " type="text" placeholder="Topic Description"/>
    <button className="bg-green-600 text-white py-3 px-6 w-fit font-bold">
        Add Topic
    </button>
    
    </form>;
}