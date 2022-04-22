type Languages = {
    name: string
}

export const checkData = (data: Languages[] | string, type = 'text'): string | string[] => {
    switch (type) {
        case "text": {
            return data && typeof data === 'string' ? data : "N/A"
        }
        case "languages": {
            const languages: string[] = [];
            data && Array.isArray(data) && data.map(item => languages.push(item.name));
            return languages.length > 0 ? languages : "N/A";
        }
        case "currency": {
            return data && typeof data === 'string' ? data.split(",") : "N/A"
        }
        case "phone": {
            return data ? `+${data}` : "N/A"
        }
        default: return "N/A"
    }
}