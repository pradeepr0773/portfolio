import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/submit', formData);
            alert('Send successfully');
            setFormData({ name: '', email: '', subject: '' }); // Clear form fields
        } catch (error) {
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
            alert('Error submitting form. Please try again later.');
        }
    };

    return (
        <div className="mt-9" id="contact">
            <h1 className="text-4xl border-b-4 mb-5 w-[140px] font-bold m-5">Contact</h1>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="space-y-6 projectList m-5 p-5 w-[470px] bg-white rounded-lg shadow-lg">
                    <div>
                        <label htmlFor="name" className="block  font-medium text-xl">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-xl"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-xl font-medium">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-xl"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-xl font-medium">Subject:</label>
                        <textarea
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="mt-1 block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-xl"
                            rows="4"
                        ></textarea>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
