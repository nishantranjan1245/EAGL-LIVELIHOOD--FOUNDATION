import Layout from "./Layout.jsx";

import Home from "./Home";

import About from "./About";

import Programs from "./Programs";

import Impact from "./Impact";

import GetInvolved from "./GetInvolved";

import Contact from "./Contact";

import Donate from "./Donate";

import FAQs from "./FAQs";

import TermsPrivacy from "./TermsPrivacy";

import Volunteer from "./Volunteer";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    About: About,
    
    Programs: Programs,
    
    Impact: Impact,
    
    GetInvolved: GetInvolved,
    
    Contact: Contact,
    
    Donate: Donate,
    
    FAQs: FAQs,
    
    TermsPrivacy: TermsPrivacy,
    
    Volunteer: Volunteer,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Programs" element={<Programs />} />
                
                <Route path="/Impact" element={<Impact />} />
                
                <Route path="/GetInvolved" element={<GetInvolved />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Donate" element={<Donate />} />
                
                <Route path="/FAQs" element={<FAQs />} />
                
                <Route path="/TermsPrivacy" element={<TermsPrivacy />} />
                
                <Route path="/Volunteer" element={<Volunteer />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}