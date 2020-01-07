class AuthController < ApplicationController
    def create
      user = User.find_by(username: params['username'])
      if user && user.authenticate(params['password'])
        token =  JWT.encode({user_id: user.id}, 'secretkey', 'HS256')
  
        render json: { id: user.id, username: user.username, token: token }
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
        render json: { id: user.id, username: user.username, token: token }
      else
        render json: { error: 'invalid token' }, status: 401
      end
  
  
  
    end
  end