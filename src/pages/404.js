import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const NotFound = () => {
    return (
        <Layout>
            <Head title="Page not found" />
            <h1>Error 404</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound;