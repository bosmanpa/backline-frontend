class Event < ApplicationRecord
    belongs_to :user, foreign_key: :renter_id
end
