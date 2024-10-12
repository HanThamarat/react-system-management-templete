import PropTypes from 'prop-types';
import NavOfDash from './nav';
import { ToastContainer } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthCurrentAgency } from '../../../slicers/authenticateSlicer';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import SliderComponent from './slider';
import BreadcrumbsWithIcon from '../../../components/content-breadcrumbs/Breadcrumb';

const DashMasterLayout = ({ children, title, path }) => {

    const dispatch = useDispatch();
    const currentAgency = useSelector((state) => state.auth.currentAgency);
    const [currentAgent ,setCurrentAgent] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const isFatcing = useRef(false);
    const locatpage = useLocation();

    useEffect(() => {
        document.title = `${ title === undefined ? 'BOOKING OASIS HOME Official' : `${title} | Booking Oasis Home`}`;
        Cookies.set('lastPath', locatpage.pathname);
    }, [title, locatpage]);

    useEffect(() => {
        const token = Cookies.get('authToken');
        const fecthcurrenagent = async () => {
            try {
                if (isFatcing.current) return;
                isFatcing.current = true;
                await dispatch(fecthCurrentAgency());
                isFatcing.current = false;
            } catch (error) {
                return console.log(error);
            }
        };

        if (!currentAgency && token) fecthcurrenagent(); 

        setCurrentAgent(currentAgency?.data);

        if (!avatar && currentAgent) {
            console.log('🚀 Booking Oasis runing and ready!');
            let usersplit = currentAgent.firstName.concat(" ", currentAgent.lastName).split(' ');
            if (usersplit.length > 1) {
                const first = usersplit[0].substring(0, 1).toLocaleUpperCase();
                const last = usersplit[1].substring(0, 1).toLocaleUpperCase();
                setAvatar(`${first}${last}`);
            } 
            
            if (usersplit.length === 1 ) {
                const first = usersplit[0].substring(0, 1).toLocaleUpperCase();
                setAvatar(first);
            }
        }
    }, [dispatch, currentAgency, currentAgent, avatar]);

    return(
        <>
        <div className='font-primaryRegular text-blue-gray-700 w-full text-[14px]'>
            <div className='flex'>
                <div className={`${ Cookies.get('wSlider') === '' ? '' : Cookies.get('wSlider') } border duration-100 ease-in-out`}>
                    <SliderComponent />
                </div>
                <main className='w-full duration-100 ease-in-out'>
                    <NavOfDash userData={currentAgent} avatarName={avatar} />
                    <div className='mx-5 my-5'>
                        <div className='flex items-center justify-between mb-5 lg:mb-3 lg:grid lg:grid-cols-1 gap-y-2'>
                            <div className='my-2'>
                                <span className='bg-blue-200 py-[8px] px-[20px] rounded-md'>{title}</span>
                            </div>
                            <BreadcrumbsWithIcon path={path} />
                        </div>
                        { children }
                    </div>
                    <div className='fixed bottom-0 w-full bg-blue-200 py-4 text-gray-700'>
                        <div className='w-full flex justify-between items-center mx-5'>
                            <span>@BOOKING OASIS HOME CO.</span>
                            <span>Development & Design by Dev & Design Teams Booking Oasis</span>
                        </div>
                    </div>
                </main>
            </div>
            <ToastContainer />
        </div>
        </>
    );
};

DashMasterLayout.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    path: PropTypes.any,
};

export default DashMasterLayout;