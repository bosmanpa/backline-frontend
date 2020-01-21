class EventSerializer < ActiveModel::Serializer
  attributes :id, :renter_id, :name, :location, :description, :start_date, :end_date
end
