class AuthController < ApplicationController
    def create
      user = User.find_by(username: params['username'])
      if user && user.authenticate(params['password'])
        token =  JWT.encode({user_id: user.id}, 'secretkey', 'HS256')
  
        render json: { id: user.id, renter_created: user.renter_created, renter_name: user.renter_name, renter_location: user.renter_location, renter_info: user.renter_info, renter_image: user.renter_image, owner_created: user.owner_created, owner_name: user.owner_name, owner_location: user.owner_location, owner_info: user.owner_info, owner_image: user.owner_image, token: token }
      else
        render json: { error: 'invalid credentials' }, status: 401
      end
    end
  
    def show
      token = request.headers['Authorization'].split(' ')[1]
      decode = JWT.decode token, 'secretkey', true, { algorithm: 'HS256' }
      user_id = decode[0]['user_id']
      user = User.find(user_id)
  
      if(user)
        render json: { id: user.id, renter_created: user.renter_created, renter_name: user.renter_name, renter_location: user.renter_location, renter_info: user.renter_info, renter_image: user.renter_image, owner_created: user.owner_created, owner_name: user.owner_name, owner_location: user.owner_location, owner_info: user.owner_info, owner_image: user.owner_image, token: token }
      else
        render json: { error: 'invalid token' }, status: 401
      end
  
  
  
    end
  end
