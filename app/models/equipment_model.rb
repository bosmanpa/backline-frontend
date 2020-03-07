class EquipmentModel < ApplicationRecord
    # belongs_to :equipment_types
    has_many :owned_equipments, foreign_key: :model_id
end
