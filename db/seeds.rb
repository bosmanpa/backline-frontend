require 'database_cleaner'

DatabaseCleaner.clean_with(:truncation)

User.create(username: 'user', password: 'password')

EquipmentType.create(name: 'Mixer')
EquipmentType.create(name: 'Turntable')
EquipmentType.create(name: 'CDJ')
EquipmentType.create(name: 'Active Speaker')
EquipmentType.create(name: 'Subwoofer')

EquipmentModel.create(equipment_type_id: 1, name: 'Allen & Heath XONE: 96', description: '4 + 2 channel Analog Mixer' )
EquipmentModel.create(equipment_type_id: 1, name: 'Allen & Heath XONE: 92', description: '4 channel Analog Mixer')
EquipmentModel.create(equipment_type_id: 1, name: 'Pioneer DJM-900 Nexus', description: '4-channel Digital mixer')
EquipmentModel.create(equipment_type_id: 1, name: 'Pioneer DJM-900NXS2', description: '4-channel Digital mixer')
EquipmentModel.create(equipment_type_id: 2, name: 'Technics SL-1200MK2', description: 'Turntable')
EquipmentModel.create(equipment_type_id: 2, name: 'Pioneer PLX-1000', description: 'High-Torque Turntable')
EquipmentModel.create(equipment_type_id: 3, name: 'CDJ-900 Nexus', description: 'CD & USB Stick Player')
EquipmentModel.create(equipment_type_id: 3, name: 'CDJ-2000 Nexus', description: 'Multi Player' )
EquipmentModel.create(equipment_type_id: 3, name: 'CDJ-2000NXS2', description: 'Multi Player High Res Audio')
EquipmentModel.create(equipment_type_id: 4, name: 'QSC K8.2', description:'8-inch Active 2000W' )
EquipmentModel.create(equipment_type_id: 4, name: 'EV ETX Speaker', description: '15-inch Active 2000W' )
EquipmentModel.create(equipment_type_id: 4, name: 'JBL SRX 815P', description: '15-inch Active 2000W')
EquipmentModel.create(equipment_type_id: 5, name: 'QSC KW181', description: '18-inch Active 1000W' )
EquipmentModel.create(equipment_type_id: 5, name: 'QSC KS212C', description: 'Dual 12-inch Cardioid Active 3600W')
EquipmentModel.create(equipment_type_id: 5, name: 'JBL SRX 828SP', description: 'Dual 18-inch Active 2000W')
