"use client";
import { useEffect } from "react";

// declare global {
//   interface Window {
//     googleTranslateElementInit: () => void;
//     google: any;
//   }
// }


declare global {
    interface Window {
        googleTranslateElementInit: () => void;
        google: {
            translate: {
                TranslateElement: {
                    new(
                        options: {
                            pageLanguage: string;
                            includedLanguages: string;
                            layout: number;
                        },
                        elementId: string
                    ): unknown;
                    InlineLayout: {
                        SIMPLE: number;
                    };
                };
            };
        };
    }
}

const GoogleTranslate = () => {
    useEffect(() => {
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "en,bn",
                    layout:
                        window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                },
                "google_translate_element"
            );
        };

        const script = document.createElement("script");
        script.src =
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;

        document.body.appendChild(script);
    }, []);

    return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;