    // component
    import LogoComponent from '../../../components/Logo/logo'
    import InputComponet from '../../../components/content-input/input-full'

    import MasterLayout from '../../layouts/master';
    import RadioComponent from '../../../components/content-input/radio-full';
    import ButtonFullComponent from '../../../components/content-buttons/full-button';

    // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  


    //libs
    import {Link} from 'react-router-dom';
    import {Divider} from 'antd';
    import { Navbar } from '@material-tailwind/react';

    const agencyform = () => {

        return (
            
        <MasterLayout Navlight={true}>
            

            <div className="flex items-center justify-center min-h-screen bg-gray-100 my-[20px] animate-fade-left animate-once animate-duration-1000">
        <div className="w-full max-w-md -translate-y-20 p-4 bg-white border border-gray-400 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Format your 
            company data</h5>
            <div className="my-[20px] animate-fade-left animate-once animate-duration-1000">
                    <div className="flex justify-between gap-x-3 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 md:flex-col md:gap-y-5 lg:flex-col lg:gap-y-5">
                        <InputComponet color="blue" label="FirstName" value="" OnChange="" />
                        <InputComponet color="blue" label="LastName" value="" OnChange="" />
                    </div>
                    <div className="my-5">
                        <InputComponet color="blue" label="Email" value="" OnChange="" />
                    </div>
                    <div className="my-5">
                        <InputComponet type="password" color="blue" label="password" value="" OnChange="" />
                    </div>
                    <div className="my-5">
                        <InputComponet type="password" color="blue" label="Tel." value="" OnChange="" />
                    </div>
                    <div className="flex justify-between gap-x-1 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 md:flex-col md:gap-y-5 lg:flex-col lg:gap-y-5">
                        <div >
                        <svg class="h-8 w-8 text-primary"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="5" r="2" />  <path d="M10 22v-5l-1-1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" /></svg>
                        </div>
                        <RadioComponent  color="blue" label="Man" value="1" />
                        <div>
                        <svg class="h-8 w-8 text-primary"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="5" r="2" />  <path d="M10 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" /></svg>
                        </div>
                        <RadioComponent  color="blue" label="Woman" value="2"  />
                    </div>
                    <div className="my-5">
                    <InputComponet type="file" color="blue" label="Image Profile" value="" OnChange="" />
                    </div>
                
                    <div className="my-5">
                    <InputComponet type="text" color="blue" label="ID CARD " value="" OnChange="" />
                    </div>
                </div>
                <ButtonFullComponent type="submit"  color="blue"className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  lable="Finnish"></ButtonFullComponent>
            </form>
        </div>
        </div>
        </MasterLayout >
        )
    }

    export default agencyform   