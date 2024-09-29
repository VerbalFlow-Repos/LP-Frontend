import React from "react";
import { useTheme } from '../ThemeComponents/ThemeContext';

const PrivacyPolicy = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#454545]'}`}>Datenschutzerklärung</h1>
            <div className={`text-lg ${isDarkMode ? 'text-[#acacac]' : 'text-[#454545]'}`}>
                <p className="mb-4">
                    Hier kommt der Text Ihrer Datenschutzerklärung. Stellen Sie sicher, dass Sie alle notwendigen Informationen gemäß der DSGVO einschließen, wie zum Beispiel:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Welche Daten Sie sammeln und warum</li>
                    <li>Wie Sie diese Daten verwenden</li>
                    <li>Wie lange Sie die Daten aufbewahren</li>
                    <li>Mit wem Sie die Daten teilen</li>
                    <li>Wie Benutzer ihre Daten einsehen oder löschen lassen können</li>
                    <li>Ihre Kontaktinformationen für Datenschutzanfragen</li>
                </ul>
                <p>
                    Es wird empfohlen, dass Sie sich von einem Rechtsexperten beraten lassen, um sicherzustellen, dass Ihre Datenschutzerklärung alle gesetzlichen Anforderungen erfüllt.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;