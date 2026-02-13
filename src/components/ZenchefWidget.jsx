import { useEffect } from 'react';

const ZenchefWidget = () => {
    useEffect(() => {
        // Zenchef SDK Injection
        (function (d, s, id) {
            const el = d.getElementsByTagName(s)[0];
            if (d.getElementById(id) || el.parentNode == null) return;
            var js = d.createElement(s);
            js.id = id;
            js.src = 'https://sdk.zenchef.com/v1/sdk.min.js';
            el.parentNode.insertBefore(js, el);
        })(document, 'script', 'zenchef-sdk');
    }, []);

    return (
        <div
            className="zc-widget-config"
            data-restaurant="355141"
            data-lang="fr"
            data-primary-color="#67A89A"
        ></div>
    );
};

export default ZenchefWidget;
