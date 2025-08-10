
export default function getServerUrl(type){
        switch(type){
            case "A":
            return "https://promotium.duckdns.org/app1"
            case "B":
            return "https://promotium.duckdns.org/app2"
            case 'C':
            return "https://promotium.duckdns.org/app3"
            case 'D':
            return "https://promotium.duckdns.org/app4"
        }
}