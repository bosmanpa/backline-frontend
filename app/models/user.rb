class User < ApplicationRecord

has_secure_password
validates :username, presence: true, uniqueness: true, :on => :create
validates :password, presence: true, confirmation: {case_sensitive: true}, :on => :create
# validates :password, length: {minimum: 5}

has_many :events, foreign_key: :renter_id
has_many :owned_equipments, foreign_key: :owner_id


end
