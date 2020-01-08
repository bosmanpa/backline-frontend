class User < ApplicationRecord

has_secure_password
validates :username, presence: true, uniqueness: true
# validates :password, presence: true
# validates :password, confirmation: {case_sensitive: true}
# validates :password, length: {minimum: 5}



end
