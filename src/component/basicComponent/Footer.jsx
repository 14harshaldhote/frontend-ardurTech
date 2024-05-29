import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <footer className="bg-slate-200/50 text-white text-center mt-auto">
    
      <div className="col-span-1 sm:col-span-3 sm:mt-4  m-11">
          <div className=" flex justify-between text-center sm:text-left mt-10 border-t border-gray-700 pt-3">
          <p className="text-black">&copy; 2024 Service Based Web Software</p>
           
            <div className="flex justify-center sm:justify-start space-x-4 mt-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{ color: 'black' }} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ color: 'black' }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{ color: 'black' }} />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ color: 'black' }} />
              </a>
            
          </div>
          </div>
        </div>
    </footer>
    
  );
};

export default Footer;
