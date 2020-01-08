require 'database_cleaner'

DatabaseCleaner.clean_with(:truncation)

User.create(username: 'user', password: 'password')

EquipmentType.create(name: 'Mixer')
EquipmentType.create(name: 'Turntable')
EquipmentType.create(name: 'CDJ')
EquipmentType.create(name: 'Active Speaker')
EquipmentType.create(name: 'Passive Speaker')
EquipmentType.create(name: 'Amp')

