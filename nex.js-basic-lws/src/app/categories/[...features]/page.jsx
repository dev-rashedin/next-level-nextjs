import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

async function categoryDetailsPage({ params }) {
const {features} = await params;
  console.log(features)
  

  

  if (features.length === 1) {
    return <p>Featured params: {features[0]}</p>
 }
  if (features.length === 2) {
    return <p>Featured params: {features[1]}</p>
 }
  if (features.length === 3) {
    return <p>Featured params: {features[2]}</p>
 }
  
  return (
    <div className='min-h-[60vh] flex justify-center items-center'>
      category Details Page
     
    </div>
  );
}
export default categoryDetailsPage