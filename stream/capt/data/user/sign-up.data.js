const faker = require('faker');

module.exports = {
    EXISTING_EMAIL_DATA: {
        email: 'salsabylas2otp@g.com',
        name: 'Testing',
        password: 'Flip1234',
        phone: '8111212233',
    },
    EXISTING_PHONE_DATA: {
        email: 'salsabylas99otp@g.com',
        name: 'Testing',
        password: 'Flip1234',
        phone: '822322222',
    },
    PASSWORD_MINIMUM_DATA: {
        email: 'salsabylas99otp@g.com',
        name: 'Testing',
        password: 'Flip123',
        phone: '8111212233',
    },
    VALID_SIGN_UP_DATA: {
        email: faker.internet.email(`capt_${faker.name.firstName()}`, `${faker.name.lastName()}`, 'mailinator.com'),
        name: faker.name.firstName(),
        password: 'Hahahaha',
        phone: faker.phone.phoneNumber('6###########'),
        pin: '080808',
        job: 'Pengusaha',
        birthPlace: 'Kab. Bekasi',
        birthDate: '3',
        birthMonth: 'Mei',
        birthYear: '1998',
        domicile: 'Kab. Karawang',
        address: faker.address.streetName(),
        identity: 'ktp',
        identityNumber: faker.phone.phoneNumber('6###########'),
    },
    DATA_PREFIX_INDONESIAN: {
        email: faker.internet.email(`capt_${faker.name.firstName()}`, `${faker.name.lastName()}`, 'mailinator.com'),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        password: 'Sapirebus',
        phone: faker.phone.phoneNumber('6###########'),
        pin: '080808',
        country: 'Indonesia',
    },
    DATA_PREFIX_NON_INDONESIAN: {
        email: faker.internet.email(`capt_${faker.name.firstName()}`, `${faker.name.lastName()}`, 'mailinator.com'),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        password: 'Sapirebus',
        phone: faker.phone.phoneNumber('6###########'),
        pin: '080808',
        country: 'Anguilla',
    },
};
