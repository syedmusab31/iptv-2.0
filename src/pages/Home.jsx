import streamingIllustration from "../assets/streaming.jpg";
import React, { useState, useMemo, useEffect } from "react";
import {
    Play,
    Code,
    CheckCircle,
    Share2,
    Download,
    Copy,
    Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import { EyeIcon, ClipboardIcon, LockClosedIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import html2canvas from "html2canvas";
import InterAd from "../components/InterAd";
import ServiceOverview from "../components/HomeSections/ServiceOverview";
import PrivacySecurity from "../components/HomeSections/PrivacySecurity";
import GlobalReach from "../components/HomeSections/GlobalReach";
import WhyChooseUs from "../components/HomeSections/WhyChooseUs";


// Define the URLs for the remote Excel files
const XTREAM_R2 =
    "https://pub-016ce982abc1473b806e4ec61b9c2ca0.r2.dev/xtream.xlsx";
const ST_R2 =
    "https://pub-016ce982abc1473b806e4ec61b9c2ca0.r2.dev/stbemu.xlsx";

// Field mappings for clarity: [Url, Username, Password, Expiration, Region]
const XTREAM_FIELDS = ["Url", "Username", "Password", "Expiration", "Region"];
// Field mappings for Stalker: [Portal, MAC Address]
const STALKER_FIELDS = ["Portal URL", "MAC Address", "Expiration"];

// Helper function for individual field copy
const copyToClipboard = (text, fieldName, showAdCallback) => {
    if (text) {
        navigator.clipboard.writeText(text);
        // Optional: Add a subtle visual feedback (e.g., a temporary checkmark icon)
        console.log(`${fieldName} copied to clipboard!`);
        if (showAdCallback) showAdCallback();
    }
};
const getR2ModifiedDate = (lastModifiedHeader) => {
    // If the header is missing, we fall back to the current time
    const date = lastModifiedHeader ? new Date(lastModifiedHeader) : new Date();
    
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }).replace(/, /g, ' ');
};

const Home = () => {

    // Add this new state variable:
    const [xtDataLoaded, setXtDataLoaded] = useState(false);
    const [activeTab, setActiveTab] = useState("xtream");

    // -------------------- Xtream Generator States & Logic --------------------
    const [xtConnected, setXtConnected] = useState(false);
    const [xtData, setXtData] = useState([]);
    const [xtRow, setXtRow] = useState([]);
    const [xtRegion, setXtRegion] = useState("");
    const [xtShowPassword, setXtShowPassword] = useState(false);
    const [xtLoading, setXtLoading] = useState(false);
    const [isGeneratingUsername, setIsGeneratingUsername] = useState(false);
    const [xtLastModified, setXtLastModified] = useState(null);
    const [xtDownloadLoading, setXtDownloadLoading] = useState(false);
    const [showAd, setShowAd] = useState(false);

    // Helper function to trigger ad
    const triggerAd = () => {
        setShowAd(true);
    };

    // State for sequential flow
    const [xtStep, setXtStep] = useState(0);
    const [xtGeneratedFields, setXtGeneratedFields] = useState({
        Url: "",
        Username: "",
        Password: "",
        Expiration: "",
        Region: "",
    });

    // Determine if all fields have been revealed (Step 6 is achieved)
    const allFieldsGenerated = xtStep > (xtRegion ? 4 : 5);

    // NEW FUNCTION to load the full dataset (without selecting a row)
    const initialLoadData = async () => {
        try {
            const res = await fetch(XTREAM_R2);
            const buffer = await res.arrayBuffer();
            const workbook = XLSX.read(buffer, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            // Get the actual file's last modified date from response headers
            const lastModifiedHeader = res.headers.get('last-modified');
            let formattedDate = new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            }).replace(/, /g, ' ');

            if (lastModifiedHeader) {
                const lastModifiedDate = new Date(lastModifiedHeader);
                formattedDate = lastModifiedDate.toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                }).replace(/, /g, ' ');
            }

            // Store the full dataset
            setXtData(jsonData);
            setXtDataLoaded(true); // Mark data as loaded
            setXtLastModified(formattedDate);
        } catch (err) {
            console.error("Initial data load error:", err);
        }
    };
    const generateUsername = async () => {
        // 2. Set state to TRUE when the process starts
        setIsGeneratingUsername(true);

        try {
            // Simulate an API call or generation logic
            console.log('Generating username...');
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
            console.log('Username generated!');
        } catch (error) {
            console.error('Generation failed:', error);
        } finally {
            // 3. Set state back to FALSE when the process finishes
            setIsGeneratingUsername(false);
        }
    };
    // Helper to get unique regions for the dropdown
    const uniqueXtRegions = useMemo(() => {
        if (xtData.length === 0) return [];

        const regions = xtData.map((row) => row[4]).filter(Boolean);
        return [...new Set(regions)];
    }, [xtData]);

    // Combined connection and random row selection logic
    // UPDATED Combined connection and random row selection logic
    const connectAndSelectRow = async () => {
        triggerAd();
        setXtLoading(true);

        try {
           
            const res = await fetch(`${XTREAM_R2}?t=${Date.now()}`); 
            const lastModified = res.headers.get('last-modified');
            // Correctly passing the string to the updated helper
            setXtLastModified(getR2ModifiedDate(lastModified));
            // // Parse Data
            const buffer = await res.arrayBuffer();
            const workbook = XLSX.read(buffer, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            setXtData(jsonData);
            setXtDataLoaded(true);

            // Row Selection Logic using local jsonData
            let filteredData = xtRegion
                ? jsonData.filter((r) => r[4] === xtRegion)
                : jsonData;

            if (filteredData.length === 0) {
                console.warn("No rows found for selected region. Using full dataset.");
                filteredData = jsonData; // Fallback to full data
            }

            const randomRow =
                filteredData[Math.floor(Math.random() * filteredData.length)];
            setXtRow(randomRow);

            setXtConnected(true);
            setXtStep(1);

            if (xtRegion) {
                setXtGeneratedFields((prev) => ({ ...prev, Region: xtRegion }));
            }

        } catch (err) {
            console.error("Error fetching Xtream data:", err);
            // Optional: alert ("Failed to connect to database");
        } finally {
            setXtLoading(false);
        }
    };

    // Logic to advance the step and fill the corresponding field
    const handleXtNextStep = () => {
        triggerAd();
        // Regenerate logic
        if (allFieldsGenerated) {
            setXtLoading(true);
            setXtGeneratedFields({
                Url: "",
                Username: "",
                Password: "",
                Expiration: "",
                Region: xtRegion || "",
            });
            setXtShowPassword(false);

            const filteredData = xtRegion
                ? xtData.filter((r) => r[4] === xtRegion)
                : xtData;

            if (filteredData.length > 0) {
                const randomRow =
                    filteredData[Math.floor(Math.random() * filteredData.length)];
                setXtRow(randomRow);
                setXtStep(1);
            }



            setXtLoading(false);
            return;
        }

        // Sequential Generation: step 1 through 5
        if (xtStep >= 1 && xtStep <= 5) {
            setXtLoading(true);
            const fieldIndex = xtStep - 1;
            const fieldName = XTREAM_FIELDS[fieldIndex];
            let fieldValue = (xtRow && typeof xtRow[fieldIndex] !== 'undefined') ? xtRow[fieldIndex] : "";

            // ⬇️ MODIFIED: Remove comma from the Expiration field if it's a string
            if (fieldName === "Expiration" && typeof fieldValue === 'string') {
                fieldValue = fieldValue.replace(/,/g, ''); // Remove commas
            }
            // ⬆️ END MODIFIED

            setXtGeneratedFields((prev) => ({
                ...prev,
                [fieldName]: fieldValue,
            }));

            // Skip the 'Region' step if the region was already pre-selected
            if (fieldName === "Region" && xtRegion) {
                setXtStep(6);
            } else {
                let nextStep = xtStep + 1;

                if (nextStep === 5 && xtRegion) {
                    // If the next natural step is 5 (Region), but a region was already selected,
                    // jump straight to step 6 (All generated).
                    nextStep = 6;
                }
                setXtStep(nextStep);
            }

            setXtLoading(false);
        }
    };
    // Use useEffect to fetch data when the component mounts
    useEffect(() => {
        // Only run this initial fetch if the Xtream tab is active
        if (activeTab === "xtream" && !xtDataLoaded) {
            initialLoadData();
        }

        // Cleanup if component unmounts
        return () => { };
    }, [activeTab]); // Rerun if the active tab changes (optional, but good practice)

    // Logic for the main button text
    const getButtonText = () => {
        if (xtLoading) return "Loading...";
        if (!xtConnected) return "Connect to Database";

        if (allFieldsGenerated) return "Regenerate";

        const fieldIndex = xtStep - 1;
        let fieldName = XTREAM_FIELDS[fieldIndex];

        if (xtStep === 4 && xtRegion) {
            return "Generate Expiration Time";
        }

        if (xtStep >= 1 && xtStep <= 5) {
            return `Generate ${fieldName}`;
        }

        return "Start Generation";
    };

    // Field definitions for rendering inputs
    const fields = XTREAM_FIELDS.map((label, idx) => ({
        label,
        value: xtGeneratedFields[label],
        type: label === "Password" && !xtShowPassword ? "password" : "text",
        isVisible: true,
    })).filter(field => !(field.label === "Region" && xtRegion));

    // Utility copy function
    const copyXtAll = () => {
        if (!allFieldsGenerated) return;
        triggerAd();
        navigator.clipboard.writeText(
            `
IPTV FACTORY DETAILS

🔗 *Connection Info*
Url: ${xtGeneratedFields.Url}
Username: ${xtGeneratedFields.Username}
Password: ${xtGeneratedFields.Password}

⏳ *Service Details*
Expiration: ${xtGeneratedFields.Expiration}
Region: ${xtGeneratedFields.Region}

---

🌐 *Website & Follow*
Website: https://iptv-factory.com
Follow-Us: @IPTV_Factory

---

📱 *Recommended Apps*

 *XTREAMITY_PLUS APP:*
    https://play.google.com/store/apps/details?id=app.xtream.codegenerator&hl=en-US&pli=1
 *STBEMU STALKER CODE GENERATOR APP:*
    https://play.google.com/store/apps/details?id=com.stbemugen&hl=en
        `
        );
    };

    // Function to handle the initial region selection before connection
    const handleXtRegionChange = (value) => {
        if (xtStep === 0) {
            setXtRegion(value);
            setXtGeneratedFields({
                Url: "",
                Username: "",
                Password: "",
                Expiration: "",
                Region: "",
            });
            triggerAd(); // Added triggerAd()
        } else if (xtStep >= 1) {
            // Allow region selection after connection, just update the region state
            setXtRegion(value);
            setXtGeneratedFields((prev) => ({
                ...prev,
                Region: value,
            }));
        }
    };

    // NEW: Function to clear all relevant Xtream states
    const resetXtreamState = () => {
        setXtGeneratedFields({
            Url: "",
            Username: "",
            Password: "",
            Expiration: "",
            Region: "",
        });
        setXtStep(0);
        setXtConnected(false);
        setXtRow([]);
        setXtData([]);
        setXtRegion("");
        setXtShowPassword(false);
    };


    // ==========================================================
    // Xtream File Downloads and Share Actions
    // ==========================================================

    const downloadTxt = () => {
        if (!allFieldsGenerated) return;
        triggerAd();
        setXtDownloadLoading(true);
        const content = `
XTREAM ACCOUNT DETAILS
----------------------
Url: ${xtGeneratedFields.Url}
Username: ${xtGeneratedFields.Username}
Password: ${xtGeneratedFields.Password}
Expiration: ${xtGeneratedFields.Expiration}
Region: ${xtGeneratedFields.Region}
Website: https://iptv-factory.com
Follow-Us at @IPTV_Factory
XTREAMITY_PLUS APP:https://play.google.com/store/apps/details?id=app.xtream.codegenerator&hl=en-US&pli=1
STBEMU STALKER CODE GENERATOR APP:https://play.google.com/store/apps/details?id=com.stbemugen&hl=en
    `.trim();

        const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `xtream_account_${xtGeneratedFields.Username}.txt`;
        link.click();
        URL.revokeObjectURL(url);
        setXtDownloadLoading(false);
    };

    const handleShare = async () => {
        if (!allFieldsGenerated) return;
        triggerAd();
        setXtDownloadLoading(true);

        const shareText = `
*** MY IPTV FACTORY DETAILS ***

🔗 Connection Info
Url: ${xtGeneratedFields.Url}
Username: ${xtGeneratedFields.Username}
Password: ${xtGeneratedFields.Password}

⏳ Service Details
Expiration: ${xtGeneratedFields.Expiration}
Region: ${xtGeneratedFields.Region}

---

🌐 Website & Follow
Website: https://iptv-factory.com
Follow-Us: @IPTV_Factory

---

📱 Recommended Apps

* XTREAMITY_PLUS APP:
    https://play.google.com/store/apps/details?id=app.xtream.codegenerator&hl=en-US&pli=1
* STBEMU STALKER CODE GENERATOR APP:
    https://play.google.com/store/apps/details?id=com.stbemugen&hl=en
    `;

        const shareData = {
            title: "My IPTV Factory Account Details",
            text: shareText,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error("Error sharing:", err);
            }
        } else {
            // Assuming 'copyXtAll' is the function from the previous request
            copyXtAll();
            alert("Sharing is not supported in this browser. Credentials copied to clipboard!");
        }

        setXtDownloadLoading(false);
    };

    // UPDATED: handleImageDownload uses the hidden 'xtream-print-template'
    const handleImageDownload = async () => {
        if (!allFieldsGenerated) {
            alert("Please generate all fields before attempting to download the image.");
            return;
        }

        triggerAd();
        setXtDownloadLoading(true);

        const element = document.getElementById("xtream-print-template");
        if (!element) {
            console.error("Target element 'xtream-print-template' not found.");
            setXtDownloadLoading(false);
            return;
        }

        try {
            // Temporarily make the hidden element visible for html2canvas
            element.style.display = "block";

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
            });

            // Hide the element again immediately after capture
            element.style.display = "none";

            const image = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = image;
            link.download = `xtream_credentials_${xtGeneratedFields.Username}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clear data fields and reset state after successful download
            //resetXtreamState(); // Call the new reset function
        } catch (error) {
            console.error("Error generating image:", error);
            alert("Could not generate image. Check the browser console for details.");

            // Ensure the element is hidden if an error occurred before hiding it
            element.style.display = "none";
        } finally {
            setXtDownloadLoading(false);
        }
    };

    // -------------------- Stalker Generator States & Logic --------------------
    const [stConnected, setStConnected] = useState(false);
    const [stData, setStData] = useState([]);
    const [stRow, setStRow] = useState([]);
    const [stLoading, setStLoading] = useState(false);
    const [stDownloadLoading, setStDownloadLoading] = useState(false);
    const [stLastModified, setStLastModified] = useState(null);

    // STATES FOR SEQUENTIAL FLOW
    const [stStep, setStStep] = useState(0);
    const [stGeneratedFields, setStGeneratedFields] = useState({
        "Portal URL": "",
        "MAC Address": "",
        "Expiration": "",
    });
    const [stShowMac, setStShowMac] = useState(false);
    // Boolean flag: all stalker fields generated
    const allStFieldsGenerated = stStep === STALKER_FIELDS.length + 1;

    // Combined connection and random row selection logic
    const connectStDatabase = async () => {
        triggerAd();
        setStLoading(true);

        try {
            // const res = await fetch(ST_R2);
            const res = await fetch(`${ST_R2}?t=${Date.now()}`); 
            const lastModified = res.headers.get('last-modified');

            // Correctly passing the string to the updated helper
            setStLastModified(getR2ModifiedDate(lastModified));
            

            const buffer = await res.arrayBuffer();
            const workbook = XLSX.read(buffer, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
            setStData(jsonData);

            const randomRow = jsonData[Math.floor(Math.random() * jsonData.length)];
            console.log("Randomly Selected Row (stRow):", randomRow); setStRow(randomRow);
            setStConnected(true);
            setStStep(1); // Move to the first generation step
            setStGeneratedFields({ "Portal URL": "", "MAC Address": "", "Expiration": "" });
        } catch (err) {
            console.error("Stalker Connection error:", err);
        }
        setStLoading(false);
    };

    // Logic to advance the step and fill the corresponding field
    const handleStNextStep = () => {
        triggerAd();
        // Regenerate logic
        if (allStFieldsGenerated) {
            setStLoading(true);
            setStGeneratedFields({ "Portal URL": "", "MAC Address": "", "Expiration": "" });
            setStShowMac(false);
            // Get a new random row
            if (stData.length > 0) {
                const randomRow = stData[Math.floor(Math.random() * stData.length)];
                setStRow(randomRow);
                setStStep(1);
            }

            setStLoading(false);
            return;
        }

        // Sequential Generation: step 1 and 2
        if (stStep >= 1 && stStep <= STALKER_FIELDS.length) {
            setStLoading(true);
            const fieldIndex = stStep - 1;
            const fieldName = STALKER_FIELDS[fieldIndex];
            let fieldValue = (stRow && typeof stRow[fieldIndex] !== 'undefined') ? stRow[fieldIndex] : "";
            // NORMALIZE Expiration: handle Date objects and strings
            if (fieldName === "Expiration") {

                if (fieldValue instanceof Date) {
                    // Format Date to a readable string
                    fieldValue = fieldValue.toLocaleString('en-US', {
                        month: 'long', day: '2-digit', year: 'numeric',
                        hour: '2-digit', minute: '2-digit', hour12: true
                    });
                } else if (typeof fieldValue === 'string') {
                    // Trim and remove stray commas
                    fieldValue = fieldValue.trim().replace(/,/g, '');
                } else if (typeof fieldValue === 'number') {
                    // Excel serial date — try to convert using JS date offset (Excel epoch handling is complex)
                    try {
                        const excelEpoch = new Date(Date.UTC(1899, 11, 30));
                        const ms = fieldValue * 24 * 60 * 60 * 1000;
                        const d = new Date(excelEpoch.getTime() + ms);
                        fieldValue = d.toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
                    } catch (e) {
                        fieldValue = String(fieldValue);
                    }
                } else {
                    // Fallback to empty string if value is unexpected
                    fieldValue = fieldValue || "";
                }
            }

            setStGeneratedFields(prev => ({
                ...prev,
                [fieldName]: fieldValue
            }));

            setStStep(stStep + 1); // Increment step
            setStLoading(false);
        }
    };

    // Logic for the main button text
    const getStButtonText = () => {
        if (stLoading) return "Loading...";
        if (!stConnected) return "Connect to Database";

        if (allStFieldsGenerated) return "Regenerate";

        const fieldIndex = stStep - 1;
        const fieldName = STALKER_FIELDS[fieldIndex];

        if (stStep >= 1 && stStep <= STALKER_FIELDS.length) {
            return `Generate ${fieldName}`;
        }

        return "Start Generation";
    };

    // Field definitions for rendering Stalker inputs
    const stalkerFields = STALKER_FIELDS.map((label, idx) => ({
        label,
        value: stGeneratedFields[label],
        // MAC is the 2nd field (index 1). Treat it like a password to hide/show
        type: label === "MAC Address" && !stShowMac ? "password" : "text",
        isVisible: true
    }));

    // Utility copy function (Modified for Stalker)
    const copyStAll = () => {
        if (!allStFieldsGenerated) return;
        // Respect MAC mask: don't allow copying all if MAC is masked
        if (!stShowMac) return;

        triggerAd();
        navigator.clipboard.writeText(
            `
*** IPTV FACTORY STALKER/STB DETAILS ***

🔗 **Connection Info**
Portal URL: ${stGeneratedFields["Portal URL"]}
MAC Address: ${stGeneratedFields["MAC Address"]}
Expiration: ${stGeneratedFields["Expiration"]}

---

🌐 **Website & Follow**
Website: https://iptv-factory.com
Follow-Us: @IPTV_Factory

---

📱 **Recommended Apps**

* **XTREAMITY_PLUS APP (Xtream Code Generator):**
    https://play.google.com/store/apps/details?id=app.xtream.codegenerator&hl=en-US&pli=1
* **STBEMU STALKER CODE GENERATOR APP:**
    https://play.google.com/store/apps/details?id=com.stbemugen&hl=en
        `
        );
    };

    // NEW: Function to clear all relevant Stalker states
    const resetStalkerState = () => {
        setStGeneratedFields({ "Portal URL": "", "MAC Address": "", "Expiration": "" });
        setStStep(0);
        setStConnected(false);
        setStRow([]);
        setStData([]);
        setStShowMac(false);
    };


    // ==========================================================
    // Stalker File Downloads and Share Actions
    // ==========================================================

    const downloadStTxt = () => {
        if (!allStFieldsGenerated) return;
        triggerAd();
        setStDownloadLoading(true);

        const content = `
*** IPTV FACTORY STALKER ACCOUNT ***
===================================

✅ **CONNECTION DETAILS**
--------------------------
Portal URL: ${stGeneratedFields["Portal URL"]}
MAC Address: ${stGeneratedFields["MAC Address"]}
Expiration: ${stGeneratedFields["Expiration"]}

---

🌐 **SUPPORT & APPS**
--------------------
Website: https://iptv-factory.com
Follow-Us: @IPTV_Factory

* XTREAMITY_PLUS APP (Xtream Code Generator):
    https://play.google.com/store/apps/details?id=app.xtream.codegenerator&hl=en-US&pli=1
* STBEMU STALKER CODE GENERATOR APP:
    https://play.google.com/store/apps/details?id=com.stbemugen&hl=en

===================================
**IMPORTANT:** Copy/paste the Portal URL and MAC Address into your STB Emulator or MAG device.
    `.trim();

        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `stalker_account_${stGeneratedFields["MAC Address"].replace(/:/g, '')}.txt`; // Added MAC to filename
        link.click();
        URL.revokeObjectURL(url);
        setStDownloadLoading(false);
    };



    const handleStShare = async () => {
        if (!allStFieldsGenerated) return;
        triggerAd();
        setStDownloadLoading(true);

        const shareText = `
*** IPTV FACTORY STALKER DETAILS ***

✅ CONNECTION INFO
Portal URL: ${stGeneratedFields["Portal URL"]}
MAC Address: ${stGeneratedFields["MAC Address"]}
Expiration: ${stGeneratedFields["Expiration"]}

---

🌐 SUPPORT & APPS
Website: https://iptv-factory.com
Follow-Us: @IPTV_Factory

* STBEMU STALKER CODE GENERATOR APP:
    https://play.google.com/store/apps/details?id=com.stbemugen&hl=en
* XTREAMITY_PLUS APP (Xtream Code Generator):
    https://play.google.com/store/apps/details?id=app.xtream.codegenerator&hl=en-US&pli=1
    `;

        const shareData = {
            title: 'My IPTV Factory Stalker Account Details',
            text: shareText,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            // Fallback to copying the content if sharing is not supported
            copyStAll(); // Assuming this function exists and is the enhanced copy function
            alert("Sharing is not supported in this browser. Credentials copied to clipboard!");
        }
        setStDownloadLoading(false);
    };

    // UPDATED: handleStImageDownload uses the hidden 'stalker-print-template'
    const handleStImageDownload = async () => {
        if (!allStFieldsGenerated || !stShowMac) {
            alert("Please generate all fields and unmask MAC address before attempting to download the image.");
            return;
        }
        triggerAd();
        setStDownloadLoading(true);

        const element = document.getElementById('stalker-print-template'); // TARGET THE HIDDEN TEMPLATE
        if (!element) {
            console.error("Target element 'stalker-print-template' not found.");
            setStDownloadLoading(false);
            return;
        }

        try {
            // 1. Temporarily make the hidden element visible for html2canvas
            element.style.display = 'block';

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
            });

            // 2. Hide the element again immediately after capture
            element.style.display = 'none';

            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = `stalker_credentials_${stGeneratedFields["MAC Address"].replace(/:/g, '')}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // 3. Clear data fields and reset state after successful download
            // resetStalkerState(); // Call the new reset function

        } catch (error) {
            console.error("Error generating image:", error);
            alert("Could not generate image. Check the browser console for details.");
            // Ensure the element is hidden if an error occurred before hiding it
            element.style.display = 'none';
        } finally {
            setStDownloadLoading(false);
        }
    };


    // ==========================================================
    // Component for Copy Icon (NEW)
    // ==========================================================
    const CopyButton = ({ value, label }) => {
        // Disable copy for password or MAC when masked
        const isPasswordMasked = label === "Password" && !xtShowPassword;
        const isMacMasked = label === "MAC Address" && !stShowMac;
        const isMasked = isPasswordMasked || isMacMasked;

        return (
            value ? (
                <button
                    onClick={() => {
                        if (!isMasked) {
                            copyToClipboard(value, label, triggerAd);
                        }
                    }}
                    disabled={isMasked}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full transition z-10 ${isMasked ? "text-gray-400 cursor-not-allowed opacity-50" : "text-white hover:bg-gray-700"
                        }`}
                    title={isMasked ? (isPasswordMasked ? "Unmask password to copy" : "Unmask MAC to copy") : `Copy ${label}`}>
                    <Copy className="w-5 h-5" />
                </button>
            ) : null
        )
    };

    // ==========================================================
    // Component for Secondary Action Button (NEW)
    // ==========================================================
    const SecondaryActionButton = ({ onClick, label, icon: Icon, disabled, className = "bg-red-600" }) => (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex-1 flex items-center justify-center gap-2 ${className} text-white p-3 rounded-xl text-sm font-semibold hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-wait`}
        >
            {disabled ? <Loader2 className="w-5 h-5 animate-spin" /> : <Icon className="w-5 h-5" />}
            {label}
        </button>
    );


    return (
        <div className="bg-gray-50">
            {/* Hero Section (Unchanged) */}
            <div className="bg-slate-900 flex items-center">
                <div className="mx-auto max-w-7xl px-6 py-08 sm:py-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-08 items-center">
                        <div>
                            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                                Welcome to IPTV FACTORY.
                            </h1>
                            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
                                Generate Xtream and STBEMU codes instantly.
                                Fast process, simple steps, and accurate codes.
                            </p>
                            <div className="mt-6 flex items-center gap-x-6">
                                <a
                                    href="#tools"
                                    className="rounded-xl bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary-500 transition"
                                >
                                    Get Started
                                </a>
                                <Link
                                    to="/how-to-use"
                                    className="text-sm font-semibold text-slate-300 hover:text-primary-400 transition"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-center lg:justify-end">
                            <img
                                src={streamingIllustration}
                                alt="Streaming illustration"
                                className="w-[420px] h-auto drop-shadow-xl"
                                loading="lazy"
                                decoding="async"
                                width="420"
                                height="280"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tools Section */}
            <div id="tools" className="py-4 sm:py-12 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Select Your Tool
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-slate-600">
                            Choose the generator you need to get started immediately.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="mt-12 flex justify-center gap-4">
                        <button
                            onClick={() => setActiveTab("xtream")}
                            className={`px-4 py-2 rounded-md font-semibold ${activeTab === "xtream"
                                ? "bg-primary-600 text-white"
                                : "bg-white text-slate-700 ring-slate-200"
                                }`}
                        >
                            Xtream Generator
                        </button>
                        <button
                            onClick={() => setActiveTab("stbemu")}
                            className={`px-4 py-2 rounded-md font-semibold ${activeTab === "stbemu"
                                ? "bg-primary-600 text-white"
                                : "bg-white text-slate-700 ring-slate-200"
                                }`}
                        >
                            Stbemu Generator
                        </button>
                    </div>

                    {/* Active Tab Content */}
                    <div className="mt-4 mx-auto max-w-4xl">
                        {activeTab === "xtream" ? (
                            <div className="bg-white p-4 rounded-3xl ring-1 ring-slate-200 shadow-sm space-y-6">
                                {!xtConnected && (
                                    <p className="text-sm text-slate-500">
                                        Connect to the database using button below to start generating your Xtream account credentials.
                                    </p>
                                )

                                }
                                {/* Connection Status - Top of form */}
                                {xtConnected && (
                                    <div className="flex items-center gap-2 text-green-600 font-medium mb-4">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>Database Connected</span>
                                        <span className="text-xs text-slate-500 font-normal ml-7">
                                            Last Updated: {xtLastModified}
                                        </span>
                                    </div>
                                )}

                                {/* Region Dropdown - Below Connection Status */}
                                <div className="mb-6 pb-4 border-b border-slate-200">
                                    <label className="text-sm font-medium text-slate-700 block mb-2">Any Region</label>
                                    <select
                                        value={xtRegion}
                                        onChange={(e) => handleXtRegionChange(e.target.value)}
                                        className={`w-full border rounded-md p-2 text-sm ${!xtConnected || xtStep >= 2 ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
                                            }`}
                                        disabled={!xtConnected || xtStep >= 2}
                                    >
                                        <option value="">Any Region</option>
                                        {uniqueXtRegions.map((region) => (
                                            <option key={region} value={region}>{region}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Data Fields (Used for live display) */}
                                <div id="xtream-output-card" className="space-y-3">
                                    {fields.map((field, idx) => (
                                        <div key={idx}>
                                            <label className="text-sm font-medium text-slate-700 block mb-1">{field.label}</label>
                                            <div className="relative">
                                                <input
                                                    type={field.type}
                                                    className="w-full border p-3 rounded-xl pr-14 bg-gray-900 text-white font-mono text-sm tracking-wide placeholder-gray-500 select-none"
                                                    value={field.value}
                                                    readOnly
                                                    placeholder={xtConnected ? `Click 'Generate ${field.label}'` : "Connect to Database first..."}
                                                    onCopy={(e) => {
                                                        if (field.label === "Password" && !xtShowPassword) {
                                                            e.preventDefault();
                                                        } else if (field.label !== "Password") {
                                                            // Allow copy only through icon, not keyboard
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    onKeyDown={(e) => {
                                                        // Block Ctrl+C (Copy) and Cmd+C (Mac) for all fields
                                                        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    onContextMenu={(e) => e.preventDefault()}
                                                />
                                                {/* Show/Hide Password Button - Only show when all fields generated */}
                                                {field.label === "Password" && allFieldsGenerated && (
                                                    <button
                                                        onClick={() => { triggerAd(); setXtShowPassword(!xtShowPassword); }}
                                                        className="absolute right-12 top-1/2 -translate-y-1/2 text-white p-1 rounded-full hover:bg-gray-700 transition z-10"
                                                        title={xtShowPassword ? "Hide Password" : "Unmask Password"}
                                                    >
                                                        <EyeIcon className="w-5 h-5" />
                                                    </button>
                                                )}
                                                {/* Copy Icon - Disabled until all fields generated */}
                                                {allFieldsGenerated ? (
                                                    <CopyButton
                                                        value={field.value}
                                                        label={field.label}
                                                        className={field.label === "Password" && allFieldsGenerated ? "right-12" : "right-3"}
                                                    />
                                                ) : (
                                                    <button
                                                        disabled
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 p-1 rounded-full cursor-not-allowed z-10 opacity-50"
                                                        title="Generate all fields to copy"
                                                    >
                                                        <Copy className="w-5 h-5" />
                                                    </button>
                                                )}
                                            </div>
                                            {/* Help text for Password field */}
                                            {field.label === "Password" && allFieldsGenerated && !xtShowPassword && (
                                                <p className="text-xs text-amber-600 mt-1">💡 Unmask password to view it</p>
                                            )}
                                            {field.label === "Password" && xtGeneratedFields.Password && !allFieldsGenerated && (
                                                <p className="text-xs text-slate-500 mt-1">Generate all fields to view and copy password</p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* ======================================================= */}
                                {/* *** HIDDEN PRINT TEMPLATE FOR XTREAM HTML2CANVAS *** */}
                                {/* ======================================================= */}
                                {allFieldsGenerated && (
                                    <div
                                        id="xtream-print-template"
                                        className="p-6 bg-white border border-gray-300 rounded-lg"
                                        style={{
                                            display: 'none',
                                            position: 'absolute',
                                            left: '-9999px',
                                            width: '400px',
                                            // Setting a fixed height can sometimes help with canvas rendering
                                            minHeight: '450px',
                                            padding: '20px',
                                        }}
                                    >
                                        {/* --- EXISTING ACCOUNT DETAILS --- */}
                                        <h3 className="text-xl font-bold mb-4 text-center text-slate-800 border-b pb-2">
                                            XTREAM Account Credentials
                                        </h3>
                                        <div className="space-y-3 font-mono text-sm">
                                            <p className="text-slate-800">
                                                <span className="font-semibold text-slate-600 block">Url:</span>
                                                {xtGeneratedFields.Url}
                                            </p>
                                            <p className="text-slate-800">
                                                <span className="font-semibold text-slate-600 block">Username:</span>
                                                {xtGeneratedFields.Username}
                                            </p>
                                            <p className="text-slate-800">
                                                <span className="font-semibold text-slate-600 block">Password:</span>
                                                {xtGeneratedFields.Password}
                                            </p>
                                            <p className="text-slate-800">
                                                <span className="font-semibold text-slate-600 block">Expiration:</span>
                                                {xtGeneratedFields.Expiration}
                                            </p>
                                            <p className="text-slate-800">
                                                <span className="font-semibold text-slate-600 block">Region:</span>
                                                {xtGeneratedFields.Region}
                                            </p>
                                        </div>

                                        {/* ⬇️ NEW SECTION: BRANDING & APP LINKS ⬇️ */}
                                        <div className="mt-8 pt-4 border-t border-dashed border-gray-300 text-center text-xs space-y-2">
                                            <h4 className="font-bold text-slate-700">Get Started Now!</h4>
                                            <p className="text-slate-600">Website: <a href="https://iptv-factory.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://iptv-factory.com</a></p>
                                            <p className="text-slate-600">Follow-Us at **@IPTV_Factory**</p>

                                            <div className="space-y-1 pt-2">
                                                <p className="text-slate-600">
                                                    **XTREAMITY PLUS APP:**
                                                    <a href="https://play.google.com/store/apps/details?id=app.xtream.codegenerator&hl=en-US&pli=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 block mt-0.5 break-words">
                                                        https://play.google.com/store/apps/details?id=app.xtream.codegenerator&hl=en-US&pli=1
                                                    </a>
                                                </p>
                                                <p className="text-slate-600">
                                                    **STBEMU STALKER CODE GENERATOR APP:**
                                                    <a href="https://play.google.com/store/apps/details?id=com.stbemugen&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 block mt-0.5 break-words">
                                                        https://play.google.com/store/apps/details?id=com.stbemugen&hl=en
                                                    </a>
                                                </p>
                                            </div>

                                            <p className="pt-3 text-gray-500 italic">Thank you for choosing IPTV Factory.</p>
                                        </div>
                                    </div>
                                )}

                                {/* Main Action Button */}
                                <div className="flex mt-4">
                                    <button
                                        onClick={xtConnected ? handleXtNextStep : connectAndSelectRow}
                                        disabled={xtLoading || xtDownloadLoading}
                                        className="flex-1 bg-primary-600 text-white p-3 rounded-xl font-bold text-lg hover:bg-primary-700 transition disabled:bg-primary-400 disabled:cursor-wait flex items-center justify-center"
                                    >
                                        {xtLoading ? <Loader2 className="w-6 h-6 animate-spin mr-2" /> : null}
                                        {getButtonText()}
                                    </button>
                                </div>

                                {/* Secondary Action Buttons (Visible only when generation is complete) */}
                                {allFieldsGenerated && (
                                    <>
                                        <hr className="border-t border-slate-200" />
                                        {!xtShowPassword && (
                                            <p className="text-xs text-amber-600 bg-amber-50 p-2 rounded">
                                                🔒 Unmask password first to enable download and share actions
                                            </p>
                                        )}
                                        <div className="flex gap-3 mt-4 flex-wrap">
                                            {/* COPY ALL */}
                                            <SecondaryActionButton
                                                onClick={copyXtAll}
                                                label="COPY ALL"
                                                icon={ClipboardIcon}
                                                disabled={xtDownloadLoading || !xtShowPassword}
                                                className="bg-gray-600 hover:bg-gray-700"
                                            />

                                            {/* SHARE */}
                                            <SecondaryActionButton
                                                onClick={handleShare}
                                                label="SHARE"
                                                icon={Share2}
                                                disabled={xtDownloadLoading || !xtShowPassword}
                                                className="bg-yellow-600 hover:bg-yellow-700"
                                            />

                                            {/* .TXT DOWNLOAD */}
                                            <SecondaryActionButton
                                                onClick={downloadTxt}
                                                label=".TXT"
                                                icon={Download}
                                                disabled={xtDownloadLoading || !xtShowPassword}
                                                className="bg-blue-600 hover:bg-blue-700"
                                            />

                                            {/* IMAGE DOWNLOAD */}
                                            <SecondaryActionButton
                                                onClick={handleImageDownload}
                                                label="IMAGE"
                                                icon={Download}
                                                disabled={xtDownloadLoading || !xtShowPassword}
                                                className="bg-red-600 hover:bg-red-700"
                                            />


                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            // Stalker Content (UPDATED with new logic)
                            <div className="bg-white p-8 rounded-3xl ring-1 ring-slate-200 shadow-sm space-y-6">

                                {/* Connection Status */}
                                {stConnected && (
                                    <div className="flex items-center gap-2 text-green-600 font-medium mb-4">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>Database Connected</span>
                                        <span className="text-xs text-slate-500 font-normal ml-7">
                                            Last Updated: {stLastModified}
                                        </span>
                                    </div>
                                )}

                                {/* Data Fields (Used for live display) */}
                                <div id="stalker-output-card" className="space-y-3">
                                    {stalkerFields.map((field, idx) => (
                                        <div key={idx}>
                                            <label className="text-sm font-medium text-slate-700 block mb-1">{field.label}</label>
                                            <div className="relative">
                                                <input
                                                    type={field.type}
                                                    className="w-full border p-3 rounded-xl pr-14 bg-gray-900 text-white font-mono text-sm tracking-wide placeholder-gray-500 select-none"
                                                    value={field.value}
                                                    readOnly
                                                    placeholder={stConnected ? `Click 'Generate ${field.label}'` : "Connect to Database first..."}
                                                    onCopy={(e) => {
                                                        // Prevent all copy operations - only allow via icon
                                                        e.preventDefault();
                                                    }}
                                                    onKeyDown={(e) => {
                                                        // Block Ctrl+C (Copy) and Cmd+C (Mac) for all fields
                                                        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    onContextMenu={(e) => e.preventDefault()}
                                                />
                                                {/* Show/Hide MAC Button */}
                                                {field.label === "MAC Address" && allStFieldsGenerated && (
                                                    <button
                                                        onClick={() => { triggerAd(); setStShowMac(!stShowMac); }}
                                                        className="absolute right-12 top-1/2 -translate-y-1/2 text-white p-1 rounded-full hover:bg-gray-700 transition z-10"
                                                        title={stShowMac ? "Hide MAC" : "Show MAC"}
                                                    >
                                                        <EyeIcon className="w-5 h-5" />
                                                    </button>
                                                )}
                                                {/* Copy Icon */}
                                                <CopyButton
                                                    value={field.value}
                                                    label={field.label}
                                                    className={field.label === "MAC Address" && allStFieldsGenerated ? "right-12" : "right-3"}
                                                />
                                            </div>
                                            {/* Helper text for MAC field when masked */}
                                            {field.label === "MAC Address" && allStFieldsGenerated && !stShowMac && (
                                                <p className="text-xs text-amber-600 mt-1">💡 Unmask MAC address to copy it.</p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* ======================================================= */}
                                {/* *** HIDDEN PRINT TEMPLATE FOR STALKER HTML2CANVAS *** */}
                                {/* ======================================================= */}
                                {allStFieldsGenerated && (
                                    <div
                                        id="stalker-print-template"
                                        className="p-6 bg-white border border-gray-300 rounded-lg"
                                        style={{
                                            display: 'none',
                                            position: 'absolute',
                                            left: '-9999px',
                                            width: '400px',
                                            minHeight: '400px',
                                            padding: '20px',
                                        }}
                                    >
                                        {/* --- STALKER ACCOUNT DETAILS --- */}
                                        <h3 className="text-xl font-bold mb-4 text-center text-slate-800 border-b pb-2">
                                            Stalker/STB Account Credentials
                                        </h3>
                                        <div className="space-y-3 font-mono text-sm">
                                            <p className="text-slate-800">
                                                <span className="font-semibold text-slate-600 block">Portal URL:</span>
                                                {stGeneratedFields["Portal URL"]}
                                            </p>
                                            <p className="text-slate-800">
                                                <span className="font-semibold text-slate-600 block">MAC Address:</span>
                                                {stGeneratedFields["MAC Address"]}
                                            </p>
                                            <p className="text-slate-800">
                                                <span className="font-semibold text-slate-600 block">Expiration:</span>
                                                {stGeneratedFields["Expiration"]}
                                            </p>
                                        </div>

                                        {/* ⬇️ BRANDING & APP LINKS ⬇️ */}
                                        <div className="mt-8 pt-4 border-t border-dashed border-gray-300 text-center text-xs space-y-2">
                                            <h4 className="font-bold text-slate-700">Get Started Now!</h4>
                                            <p className="text-slate-600">Website: <a href="https://iptv-factory.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://iptv-factory.com</a></p>
                                            <p className="text-slate-600">Follow-Us at **@IPTV_Factory**</p>

                                            <div className="space-y-1 pt-2">
                                                <p className="text-slate-600">
                                                    **STBEMU STALKER CODE GENERATOR APP:**
                                                    <a href="https://play.google.com/store/apps/details?id=com.stbemugen&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 block mt-0.5 break-words">
                                                        https://play.google.com/store/apps/details?id=com.stbemugen&hl=en
                                                    </a>
                                                </p>
                                                <p className="text-slate-600">
                                                    **XTREAMITY PLUS APP:**
                                                    <a href="https://play.google.com/store/apps/details?id=app.xtream.codegenerator&hl=en-US&pli=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 block mt-0.5 break-words">
                                                        https://play.google.com/store/apps/details?id=app.xtream.codegenerator&hl=en-US&pli=1
                                                    </a>
                                                </p>
                                            </div>

                                            <p className="pt-3 text-gray-500 italic">Thank you for choosing IPTV Factory.</p>
                                        </div>
                                    </div>
                                )}


                                {/* Main Action Button */}
                                <div className="flex mt-4">
                                    <button
                                        onClick={stConnected ? handleStNextStep : connectStDatabase}
                                        disabled={stLoading || stDownloadLoading}
                                        className="flex-1 bg-primary-600 text-white p-3 rounded-xl font-bold text-lg hover:bg-primary-700 transition disabled:bg-primary-400 disabled:cursor-wait flex items-center justify-center"
                                    >
                                        {stLoading ? <Loader2 className="w-6 h-6 animate-spin mr-2" /> : null}
                                        {getStButtonText()}
                                    </button>
                                </div>

                                {/* Secondary Action Buttons */}
                                {allStFieldsGenerated && (
                                    <>
                                        <hr className="border-t border-slate-200" />
                                        {/* Warn and disable secondary actions until MAC is unmasked */}
                                        {!stShowMac && (
                                            <p className="text-xs text-amber-600 bg-amber-50 p-2 rounded w-full">
                                                🔒 Unmask MAC address first to enable download and share actions
                                            </p>
                                        )}
                                        <div className="flex gap-3 mt-4 flex-wrap">
                                            {/* COPY ALL */}
                                            <SecondaryActionButton
                                                onClick={copyStAll}
                                                label="COPY ALL"
                                                icon={ClipboardIcon}
                                                disabled={stDownloadLoading || !stShowMac}
                                                className="bg-gray-600 hover:bg-gray-700"
                                            />

                                            {/* SHARE */}
                                            <SecondaryActionButton
                                                onClick={handleStShare}
                                                label="SHARE"
                                                icon={Share2}
                                                disabled={stDownloadLoading || !stShowMac}
                                                className="bg-yellow-600 hover:bg-yellow-700"
                                            />

                                            {/* .TXT DOWNLOAD */}
                                            <SecondaryActionButton
                                                onClick={downloadStTxt}
                                                label=".TXT"
                                                icon={Download}
                                                disabled={stDownloadLoading || !stShowMac}
                                                className="bg-blue-600 hover:bg-blue-700"
                                            />

                                            {/* IMAGE DOWNLOAD */}
                                            <SecondaryActionButton
                                                onClick={handleStImageDownload}
                                                label="IMAGE"
                                                icon={Download}
                                                disabled={stDownloadLoading || !stShowMac}
                                                className="bg-red-600 hover:bg-red-700"
                                            />


                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* New Section: Service Overview and Value Proposition */}
            <ServiceOverview />
            {/* New Section: Privacy and Security Commitment */}
            <PrivacySecurity />
            {/* New Section: Technology and Global Reach */}
            <GlobalReach />
            {/* Features Section */}
            <WhyChooseUs />
            {/* Ad Trigger */}
            {showAd && <InterAd onClose={() => setShowAd(false)} />}
        </div>
    );
};

export default Home;