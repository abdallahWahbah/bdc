import * as yup from 'yup';

export const CustomerInformation = 
[
    {
        name: "companyName",
        labelId: "companyName",
        id: "companyName",
        type: "text",
        label: "Company Name",
        initialValue: "",
        // validator: yup.string().required("Company Name can't be empty"),
        
    },
    {
        name: "commercialRegistrationNumber",
        type: "text",
        label: "Commercial Registration Number",
        // showWhen: (values) => !!values.companyName,
        initialValue: "",
        // validator: yup.number().required("Commercial Registration Number is required")
    },
    {
        name: "contactMobileNumber",
        type: "number",
        label: "Contact Mobile Number",
        initialValue: "",
        // validator: yup.number().required("Contact Mobile Number is required")
    },
    {
        name: "loanAmount",
        type: "text",
        label: "Requested Loan amount in EGP",
        initialValue: "",
    },
    {
        name: "customerID",
        type: "text",
        label: "Customer ID (CIF)",
        initialValue: "",
    },
    {
        name: "nearestBankBranch",
        id: "demo-simple-select-label",
        label: "The nearest Bank Branch",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Please, select The nearest Bank Branch"),
        options: 
        [
            {
                value: "430",
                title: "ميت غمر"
            },
            {
                value: "570",
                title: "ابو المطامير"
            },
            {
                value: "483",
                title: "الدلنجات"
            },
            {
                value: "230",
                title: "سبورتنج"
            },
            {
                value: "401",
                title: "قليوب"
            },
            {
                value: "480",
                title: "دمنهور"
            },
            {
                value: "424",
                title: "السنبلاوين"
            },
            {
                value: "520",
                title: "المنزلة"
            },
            {
                value: "420",
                title: "المنصورة"
            },
            {
                value: "421",
                title: "شربين"
            },
            {
                value: "320",
                title: "الاسماعيلية"
            },
            {
                value: "310",
                title: "السويس"
            },
            {
                value: "300",
                title: "بور سعيد"
            },
            {
                value: "440",
                title: "دمياط"
            },
            {
                value: "250",
                title: "العجمى"
            },
            {
                value: "201",
                title: "الورديان"
            },
            {
                value: "220",
                title: "باكوس"
            },
            {
                value: "255",
                title: "برج العرب"
            },
            {
                value: "260",
                title: "جليم"
            },
            {
                value: "270",
                title: "جليم"
            },
            {
                value: "200",
                title: "سيزوستريس"
            },
            {
                value: "492",
                title: "الخلفاء الراشدين"
            },
            {
                value: "490",
                title: "كفر الشيخ"
            },
            {
                value: "720",
                title: "جرجا"
            },
            {
                value: "672",
                title: "سفاجا"
            },
            {
                value: "710",
                title: "ادفو"
            },
            {
                value: "660",
                title: "اسوان"
            },
            {
                value: "640",
                title: "اسيوط"
            },
            {
                value: "690",
                title: "الاقصر"
            },
            {
                value: "610",
                title: "الفيوم"
            },
            {
                value: "630",
                title: "المنيا"
            },
            {
                value: "641",
                title: "الخارجة"
            },
            {
                value: "620",
                title: "بنى سويف"
            },
            {
                value: "650",
                title: "سوهاج"
            },
            {
                value: "670",
                title: "قنا"
            },
            {
                value: "700",
                title: "قوص"
            },
            {
                value: "705",
                title: "اسنا"
            },
            {
                value: "680",
                title: "نجع حمادى"
            },
            {
                value: "451",
                title: "كفر الزيات"
            },
            {
                value: "540",
                title: "زفتي"
            },
            {
                value: "414",
                title: "فاقوس"
            },
            {
                value: "415",
                title: "اللواء"
            },
            {
                value: "550",
                title: "ديرب نجم"
            },
            {
                value: "452",
                title: "سوق ناصر"
            },
            {
                value: "450",
                title: "طنطا"
            },
            {
                value: "606",
                title: "السادس من اكتوبر"
            },
            {
                value: "33",
                title: "الاوقاف"
            },
            {
                value: "607",
                title: "الهرم"
            },
            {
                value: "60",
                title: "الازهر"
            },
            {
                value: "120",
                title: "الاميرية"
            },
            {
                value: "600",
                title: "الجيزة"
            },
            {
                value: "160",
                title: "السبتية"
            },
            {
                value: "35",
                title: "العباسية"
            },
            {
                value: "585",
                title: "العبور"
            },
            {
                value: "180",
                title: "حلوان"
            },
            {
                value: "100",
                title: "شبرا"
            },
            {
                value: "30",
                title: "19 عدلي"
            },
            {
                value: "190",
                title: "مدينة نصر"
            },
            {
                value: "70",
                title: "مصر الجديدة"
            },
            {
                value: "110",
                title: "مصر القديمة"
            },
            {
                value: "590",
                title: "العاشر من رمضان"
            },
            {
                value: "491",
                title: "دسوق"
            },
            {
                value: "400",
                title: "بنها"
            },
            {
                value: "594",
                title: "السادات"
            },
            {
                value: "402",
                title: "كفر شكر"
            },
            {
                value: "591",
                title: "الباجور"
            },
            {
                value: "413",
                title: "ابو كبير"
            },
            {
                value: "411",
                title: "الحسينية"
            },
            {
                value: "412",
                title: "بلبيس"
            },
            {
                value: "592",
                title: "منيا القمح"
            },
        ]
    },
    
]






export const FinancialEligibilityInformation = 
[
    {
        name: "annualSalesTurnover",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Annual Sales Turnover for the previous financial year in EGP",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("This field can't be empty"),
        options: 
        [
            {
                value: "below1M",
                title: "less than 1 Million"
            },
            {
                value: "1-5M",
                title: "1 to 5 Million"
            },
            {
                value: "5-10M",
                title: "5 to 10 Million"
            },
            {
                value: "10-20M",
                title: "10 to 20 Million"
            },
            {
                value: "above20M",
                title: "more than 20 Million"
            },
        ]
    },
    {
        name: "capitalAmount",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Paid In capital Amount",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Paid In capital Amoun is required"),
        options: 
        [
            {
                value: "below50K",
                title: "less than 50,000"
            },
            {
                value: "50-150K",
                title: "50,000 to 150,000"
            },
            {
                value: "150-300K",
                title: "150,000 to 300,000"
            },
            {
                value: "above300K",
                title: "more than 300,000"
            },
        ]
    },
]






export const Generaleligibilityinformation = 
[
    {
        name: "legalFormOfTheCompany",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "The legal form of the company",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "single",
                title: "Single Proprietorship"
            },
            {
                value: "limited",
                title: "Limited Liability Company"
            },
            {
                value: "joint",
                title: "Joint Stock Company"
            },
            {
                value: "lp",
                title: "Limited Partnership (LP)"
            },
        ]
    },
    {
        name: "personAge",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Key Person's/Owner's Age?",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "below25",
                title: "Less than 25 years old"
            },
            {
                value: "25-30",
                title: "from 25 to 30 years old"
            },
            {
                value: "30-60",
                title: "from 30 to 60 years old"
            },
            {
                value: "above60",
                title: "more than 60 years old"
            }
        ]
    },
    {
        name: "companyYearsInBusiness",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Company's Years in business",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "below1Year",
                title: "Less than a year"
            },
            {
                value: "1-3",
                title: "1 to 3 years"
            },
            {
                value: "3-5",
                title: "3 to 5 years"
            },
            {
                value: "above5",
                title: "more than 5 years"
            }
        ]
    },
    {
        name: "companyResidence",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Company residence",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "below1Year",
                title: "Rental for less than 1 year"
            },
            {
                value: "1year",
                title: "Rental for 1 year"
            },
            {
                value: "2year",
                title: "Rental for 2 year"
            },
            {
                value: "3year",
                title: "Rental for 3 year"
            },
            {
                value: "4-5",
                title: "Rental for 4 to 5 years"
            },
            {
                value: "above5Years",
                title: "Rental for more than 5 years"
            },
            {
                value: "own",
                title: "Own"
            }
        ]
    },
    {
        name: "companyActivity",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Company Activity",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "trnasportation",
                title: "Transportation"
            },
            {
                value: "constructions",
                title: "Constructions"
            },
            {
                value: "agriculture",
                title: "Agriculture"
            },
            {
                value: "tourism",
                title: "Tourism"
            },
            {
                value: "steelFactory",
                title: "Steel factory"
            },
            {
                value: "sugarFactory",
                title: "Sugar factory"
            },
            {
                value: "weaponsTrade",
                title: "Weapons trade"
            },
            {
                value: "goldTrade",
                title: "Gold trade"
            },
            {
                value: "pharmacies",
                title: "Pharmacies"
            },
            {
                value: "software",
                title: "Software"
            },
            {
                value: "nonBanking",
                title: "Non-banking financial institutions"
            },
            {
                value: "cementOrCeramic",
                title: "Cement or ceramic"
            },
            {
                value: "textile",
                title: "Textile"
            },
            {
                value: "fertilisers",
                title: "Fertilisers"
            },
            {
                value: "other",
                title: "Other"
            },
        ]
    },
    {
        name: "otherCompanyActivity",
        type: "text",
        label: "Other Company Activity",
        showWhen: (values) => values.companyActivity === "other",
        initialValue: "",
        // validator: yup.string().min(2).required("First Name can't be empty"),
        validator: ""
    },
    {
        name: "personalBelongings",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Have any personal belongings?",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "no",
                title: "No"
            },
            {
                value: "option1",
                title: "Yes, Cars / real estate / land"
            },
            {
                value: "option2",
                title: "Yes, Cars and real estate / lands and cars / lands and real estate"
            },
            {
                value: "option3",
                title: "Yes, Land, cars and real estate"
            },
        ]
    },
]






export const UpcomingStep1 = 
[
    {
        name: "StabilityCapitalAmount",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Stability in capital amount in the last 3 months",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "stable",
                title: "Stable – didn’t change during the last 3 months"
            },
            {
                value: "unstable",
                title: "Unstable – Changed during the last 3 months"
            },
        ]
    },
    {
        name: "availabilityFinancialStatements",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Availability of Financial Statements or list of assets",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "listOfAssets",
                title: "Have list of assets list only"
            },
            {
                value: "haveWithBelowYear",
                title: "Have a Financial statement for less than a year"
            },
            {
                value: "haveWithYearOrMore",
                title: "Have a Financial statement for a year or more"
            },
            {
                value: "dontHave",
                title: "Don't have any"
            },
        ]
    },
    {
        name: "CompanyIndustrialSector",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Company's industrial sector",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "commercial",
                title: "Commercial"
            },
            {
                value: "manufactural",
                title: "Manufactural"
            },
            {
                value: "services",
                title: "Services"
            },
            {
                value: "other",
                title: "Other"
            },
        ]
    },
    {
        name: "numberOfHeadcount",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Number of headcount",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "upTo5Emp",
                title: "Up to 5 employees"
            },
            {
                value: "5-10Emp",
                title: "From 5 to 10 employees"
            },
            {
                value: "above10Emp",
                title: "More than 10 employees"
            },
        ]
    },
    {
        name: "companyLicense",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Company's License /certificate of practicing the profession are available?",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "yes",
                title: "Yes"
            },
            {
                value: "inProgress",
                title: "No but Issuance in progress"
            },
        ]
    },
    {
        name: "yearsOfExperience",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Years of experience of the key person/owner?",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "belowYear",
                title: "less than a year"
            },
            {
                value: "1-3Years",
                title: "from 1 to 3 years"
            },
            {
                value: "above3Years",
                title: "more than 3 years"
            },
        ]
    },
    {
        name: "secondLevelOfManagement",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Is there a second level of management?",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "no",
                title: "No"
            },
            {
                value: "yesNotQualified",
                title: "Yes, but not qualified"
            },
            {
                value: "yesQualified",
                title: "Yes, Qualified/major partners"
            },
        ]
    },
    {
        name: "numberOfBanks",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Number of banks granted a credit facility to the company",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "none",
                title: "None"
            },
            {
                value: "1-2Banks",
                title: "A bank or two"
            },
            {
                value: "above3Banks",
                title: "More than three banks"
            },
        ]
    },
    {
        name: "numberYearsRelationWithOurBank",
        inputId: "demo-simple-select-label",
        labelId: "demo-simple-select-label",
        label: "Number of years of the relation with our bank",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "belowYear",
                title: "less than a year (New customer)"
            },
            {
                value: "1-3Years",
                title: "from 1 to 3 years"
            },
            {
                value: "above3Years",
                title: "more than 3 years"
            },
        ]
    },
    {
        name: "annualSales",
        type: "text",
        label: "Annual Sales",
        initialValue: "",
        // validator: yup.string().min(2).required("First Name can't be empty"),
        validator: ""
    },
    {
        name: "nationalID",
        type: "text",
        label: "National ID of the owner/partners/guarantor",
        initialValue: "",
        // validator: yup.string().min(2).required("First Name can't be empty"),
        validator: ""
    },
    {
        name: "suppliersList",
        type: "text",
        label: "Suppliers list",
        initialValue: "",
        // validator: yup.string().min(2).required("First Name can't be empty"),
        validator: ""
    },    
]






export const UpcomingStep2 = 
[
    {
        name: "text__box",
        title: "You are initially eligible for this loan and the maximum loan amount up to In accordance with the terms and conditions.",
        details:
        [
            "{Maximum loan amount that can be taken from our bank}",
            "Where “Maximum loan amount that can be taken from our bank” is 35% of Annual Sales"
        ]
    },
    {
        name: "requestedLoanAmount",
        type: "number",
        label: "Requested loan amount",
        initialValue: "",
        // validator: yup.string().min(2).required("First Name can't be empty"),
        validator: ""
    },
    {
        name: "uploadedFile",
        type: "file",
        label: "Please Upload Pre-Approval Documents documents",
        initialValue: "",
        // validator: yup.string().min(2).required("First Name can't be empty"),
        validator: ""
    },
    {
        name: "conditions",
        type: "checkbox",
        label: "I approve and authorize BDC to perform I-Score investigation and all required investigations to proceed the loan request",
        sx: {marginTop:"20px"},
        initialValue: "",
        // validator: yup.boolean().required("You have to accept the terms and conditions first"),
    },
]