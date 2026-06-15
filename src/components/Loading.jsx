// export default function Loading() {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <span className="loading loading-spinner loading-lg"></span>
//     </div>
//   );
// }


export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-blue-600"></div>
    </div>
  );
}