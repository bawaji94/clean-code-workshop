function ticketPrice(type, notifyPrice) { 
    if(type === "1 Tier AC") {
        notifyPrice(1000)
        return 1000
    }
    else if(type === "2 Tier AC") {
        notifyPrice(950)
        return 950
    }
    else if(type === "3 Tier AC") {
        notifyPrice(750)
        return 750
    }
    else if(type === "Sleeper") {
        notifyPrice(250)
        return 250
    }
    else if(type === "General") {
        return 30
    }
    else {
        throw new Error("Ticket type must be either '1 Tier AC', '2 Tier AC', '3 Tier AC', 'Sleeper' or 'General'")
    }
}