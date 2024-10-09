function checkBookingEligibility(age, hasPassport, isFlightAvailable) {
    if (age >= 18 && age <= 70 && hasPassport && isFlightAvailable) {
        return "Booking successful";
    } else {
        return "Booking failed";
    }
}
