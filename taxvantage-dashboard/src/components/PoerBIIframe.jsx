import React from 'react';

const PowerBIIframe = () => {
    // Replace this URL with your Power BI embed URL
    const iframeUrl = 'https://app.powerbi.com/view?r=eyJrIjoiYOUR_REPORT_ID_HERE';

    return (
        <div style={{ width: '100%', height: '800px' }}>
            <iframe
                title="Power BI Report"
                width="100%"
                height="100%"
                src={iframeUrl}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default PowerBIIframe;
