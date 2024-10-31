



export default function Team(){

    return(
            
<section className="bg-white dark:bg-gray-900 ">
<h2 className="text-2xl font-bold mt-12 text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Faclty Memembers</h2>
    <div className=" flex  gap-4 container px-6 py-8 mx-auto my-5 md:flex justify-center">
 

        <div className="grid gap-20 mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-full mx-auto rounded-lg hover:scale-110" src="/Team.jpg" width={100} height={100} alt="Profile"/>

                <div className="mt-2">
                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 ">Abdul Manan Gadani</h3>
                    <h4 className="mt-1 font-medium text-gray-600 dark:text-gray-300">Director</h4>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-full mx-auto rounded-lg hover:scale-110" src="/Team1.jpg" width={100} height={100} alt="avatar" />

                <div className="mt-2">
                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">Muhammad Essa Gadani</h3>
                    <h4 className="mt-1 font-medium text-gray-600 dark:text-gray-300">Admin</h4>

                </div>
            </div>

            <div className="w-full max-w-xs text-center">
                <img className="object-cover w-full h-full object-center mx-auto rounded-lg hover:scale-110 " src="/Team2.jpg" width={100} height={100} alt="avatar" />

                <div className="mt-2">
                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">Jahanzeb Ali Gadani</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">English Tutor</span>
                </div>
            </div>

        </div>
    </div>
</section>


    )
}