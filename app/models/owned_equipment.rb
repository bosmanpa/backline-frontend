class OwnedEquipment < ApplicationRecord
    belongs_to :user, foreign_key: :owner_id
    belongs_to :equipment_model, foreign_key: :owner_id
    has_many :equipment_rentals
end
