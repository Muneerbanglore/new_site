// Import statements remain the same as in your original file
import { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Star, Building2, TrendingUp, Users, CheckCircle, Globe, Zap, Play, MapPin, Phone, Mail, FileText, DollarSign, Clock, Shield, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import vedio1 from '../images/city.mp4';
import logo from '../images/logo.png';
import companyformtion from '../images/trade-licence.png';
import dubaiCompany from '../images/business-setup.png';
import sharjah from '../images/free-zone.png';
import background from '../images/back1.png';
import DRS from '../images/dubai-company.png';
import shrj from '../images/sharjah.png';
import abud from '../images/companyformation.png';
import ajmn from '../images/business-setup.png';

// ... rest of your imports and component code ...

// Find and replace the following button patterns:

// 1. For "Learn More" buttons (redirect to /services):
{/* 
<button className="...">
  Learn More <ArrowRight className="..." />
</button> 
*/}
// Replace with:
{/*
<Link to="/services">
  <button className="...">
    Learn More <ArrowRight className="..." />
  </button>
</Link>
*/}

// 2. For "Register Now" buttons (redirect to /contact):
{/* 
<button className="...">
  Register Now
</button> 
*/}
// Replace with:
{/*
<Link to="/contact">
  <button className="...">
    Register Now
  </button>
</Link>
*/}

// 3. For "Start your journey" buttons (redirect to /contact):
{/* 
<button className="...">
  Start your journey
</button> 
*/}
// Replace with:
{/*
<Link to="/contact">
  <button className="...">
    Start your journey
  </button>
</Link>
*/}

// ... rest of your component code ...

// Note: Make sure to maintain all the existing className and other attributes when making these changes.
// The above examples show the structure - you'll need to copy the exact className values from your existing buttons.

// After making these changes, you can rename the file from homepage_updated.js to homepage.js
// or copy the content back to your original file.
