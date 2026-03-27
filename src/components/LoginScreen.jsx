import Label from './Label.jsx'
import Btn from './Btn.jsx'
function LoginScreen(){
    let now = new Date().getUTCFullYear();
    return(
        <div className='pt-10 text-center text-white text-lg bg-blue-900 h-screen'>
            <section>
                <p className='border-dashed border-2 w-fit rounded-xl py-2 px-6 flex flex-col mx-auto'>SECURE - STUDENT - VOTING</p>
                <h1 className='text-4xl font-semibold mt-5 '>Student Elections {now}</h1>
            </section>
            
            <section className='border-1 w-fit rounded-xl p-5 mt-10 mx-auto flex flex-col gap-5 text-left text-lg'>
                <Label htmlFor="email" text = "Email" />
                <input className='border-1 p-2 rounded-xl w-full' type="email" name="email" id="email" placeholder='e.g. bit22-vkamanga@mubas.ac.mw' required />
                <Label htmlFor = "regNumber" text = "Registration Number" />
                <input className='border-1 p-2 rounded-xl w-full' type="text" name="regNumber" id="regNumber" placeholder='e.g. BIT/22/SS/012' required/>
                <Label htmlFor = "classLevel" text = "Year of Study" />
                <select className='border-1 p-2 rounded-xl w-full' name="classLevel" id="classLevel">
                    <option value="">---Select Class---</option>
                    <option className='font-semibold' value="1">Year 1</option>
                    <option className='font-semibold' value="2">Year 2</option>
                    <option className='font-semibold' value="3">Year 3</option>
                    <option className='font-semibold' value="4">Year 4</option>
                    <option className='font-semibold' value="5">Year 5</option>
                </select>
            </section>
            <section>
                <Btn btnType="submit" text="Continue" />
            </section>
        </div>
    );
    
}

export default LoginScreen;