export const checkData = (data, type='text') => {
    switch (type) {
        case "text": {
            return data ? data : "N/A"
        }
        case "languages" : {
            const languages = [];
            data && data.map(item=>languages.push(item.name));
            return languages.length > 0 ? languages : "N/A";
        }
        case "currency" : {
            return data ? data.split(",") : "N/A"
        }
        case "phone" : {
            return data ? `+${data}` : "N/A"
        }
    }
}