'use client';

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            try {
                const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                    method: "DELETE",
                });
                if(res.ok){
                    router.refresh();
                }
                

                if (res.ok) {
                    console.log('Topic deleted successfully');
                  
                } else {
                    throw new Error('Failed to delete the topic');
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <button onClick={removeTopic} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
}
