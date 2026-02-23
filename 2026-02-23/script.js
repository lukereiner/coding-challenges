const bloodType = ['A', 'B', 'AB', 'O'];
const factor = ['+', '-'];

function canDonate(donor, recipient) {

    let valid = false;

    // RH Rules check
    const donorCheck = donor.at(-1);
    const recipientCheck = recipient.at(-1);
    console.log(donorCheck, recipientCheck);
    if (donorCheck === '+' && recipientCheck !== '+') {
        console.log('false');
        return false;
    } else {
        valid = true;
    }

    // Slice characters based on length
    const splitDonor = donor.split(/([-+])/).filter(Boolean);
    const splitRecipient = recipient.split(/([-+])/).filter(Boolean);
    console.log(splitDonor)
    console.log(splitRecipient);

    // Take type and check against letter rules
    switch (valid) {
        // AB Blood type
        case (splitDonor[0] === 'AB'):
            if (splitRecipient[0] === 'AB') {
                return true;
            }
            break;
        // O blood type
        case (splitDonor[0] === 'O'):
            return true;
        // A Blood type
        case (splitDonor[0] === 'A'):
            if (splitRecipient[0] === 'A' || splitRecipient[0] === 'AB') {
                return true;
            } else {
                return false;
            };
        case (splitDonor[0] === 'B'):
            if (splitRecipient[0] === 'B' || splitRecipient[0] === 'AB') {
                return true;
            } else {
                return false;
            };
        default:
            return false;
    }
}

canDonate('A+', "AB+");