
import FormContact from "@/components/FormContact";
// import { getDictionary } from "@/lib/dictionary";

export default  function ContactUs(props: { params: { lang: string } }) {
  const params = props.params;

  return (
    <div className="min-h-screen   flex items-center justify-center p-4 sm:p-6 lg:p-8 mb-10">
      <div className="bg-card rounded-lg shadow-xl p-6 sm:p-8   w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-orangeColor mb-6 text-center">
          {/* {contactus.pagetitle} */}
          Page Title
        </h1>
        <FormContact lang={params.lang}  />
      </div>
    </div>  
  );
}
