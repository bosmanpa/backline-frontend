class OwnedEquipment < ApplicationRecord
    belongs_to :user
    belongs_to :equipment_models
end
