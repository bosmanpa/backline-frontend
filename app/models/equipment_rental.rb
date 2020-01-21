class EquipmentRental < ApplicationRecord
    belongs_to :event
    belongs_to :owned_equipment, foreign_key: :equipment_id
end
