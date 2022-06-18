const faker = require('faker');

module.exports = {
    EXISTING_EMAIL_DATA: {
        email: 'salsabylas2otp@g.com',
        name: 'Testing',
        password: 'hahahaha',
        phone: '8111212233',
    },

    EXISTING_PHONE_DATA: {
        email: 'salsabylas9otp@g.com',
        name: 'Testing',
        password: 'hahahaha',
        phone: '822322222',
    },
    PASSWORD_MINIMUM_DATA: {
        email: 'salsabylas9otp@g.com',
        name: 'Testing',
        password: 'hahaha',
        phone: '8111212233',
    },
    VALID_SIGN_UP_DATA: {
        email: faker.internet.email(`automation_${faker.name.firstName()}`, `${faker.name.lastName()}`, 'mailinator.com'),
        name: faker.name.firstName(),
        password: 'Hahahaha',
        phone: faker.phone.phoneNumber('6##########'),
        pin: '080808',
        job: 'Pengusaha',
        birthPlace: 'Kab. Bekasi',
        birthDate: '3',
        birthMonth: 'Mei',
        birthYear: '1998',
        domicile: 'Kab. Karawang',
        address: faker.address.streetName(),
        identity: 'ktp',
        identityNumber: faker.phone.phoneNumber('6##########'),
    },
    DATA: {
        email: faker.internet.email(`automation_${faker.name.firstName()}`, `${faker.name.lastName()}`, 'mailinator.com'),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        password: 'Sapirebus',
        passwordAlphaNumeric: 'Test1234',
        phone: faker.phone.phoneNumber('6##########'),
        pin: '080808',
    },
    DATA2: {
        email: faker.internet.email(`automation_${faker.name.firstName()}`, `${faker.name.lastName()}`, 'mailinator.com'),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        password: 'Sapirebus28',
        phone: faker.phone.phoneNumber('6##########'),
        pin: '280897',
    },
    DATA3: {
        email: faker.internet.email(`automation_${faker.name.firstName()}`, `${faker.name.lastName()}`, 'mailinator.com'),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        password: 'Sapirebus8',
        phone: faker.phone.phoneNumber('6##########'),
        pin: '050491',
    },
    DATA4: {
        email: faker.internet.email(`automation_${faker.name.firstName()}`, `${faker.name.lastName()}`, 'mailinator.com'),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        password: 'Sapirebus97',
        phone: faker.phone.phoneNumber('6##########'),
        pin: '280808',
    },
    DATA_PREFIX_INDONESIAN: {
        email: faker.internet.email(`automation_${faker.name.firstName()}`, `${faker.name.lastName()}`, 'mailinator.com'),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        password: 'Sapirebus',
        phone: faker.phone.phoneNumber('6##########'),
        pin: '082808',
        country: 'Indonesia',
    },
    DATA_PREFIX_NON_INDONESIAN: {
        email: faker.internet.email(`automation_${faker.name.firstName()}`, `${faker.name.lastName()}`, 'mailinator.com'),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        password: 'Sapirebus',
        phone: faker.phone.phoneNumber('########'),
        pin: '080888',
        country: 'Anguilla',
    },
    REFERRAL_DATA: {
        code: 'VOCY9610',
        name: 'Ca•t Du••y Re•••••l Us•r Ac••••t',
        deeplinkAndroid:
            'https://flipid.page.link/?link=https://b2c-regression-box.flip.id/?ref%3Dvocy9610&apn=id.flip&amv=117',
        deeplinkIOS:
            'https://flipid.page.link?link=https://b2c-regression-box.flip.id/?ref%3Dvocy9610&isi=1439301290&ibi=id.flip.staging&ipbi=id.flip.staging&imv=37'
    },
};
