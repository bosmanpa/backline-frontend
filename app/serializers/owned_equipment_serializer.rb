class OwnedEquipmentSerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :model_id
end
