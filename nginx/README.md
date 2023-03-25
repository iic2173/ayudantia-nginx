# NGINX configuration 
To configure nginx in any server you need to install it in the first place.

## Install NGINX
```sh
  sudo apt update
  sudo apt install nginx
```


## Configure NGINX
You need to unlink the default page to be able to change the default configuration:
```sh
  sudo unlink /etc/nginx/sites-enabled/default
```

Then you need to to write your own configuration file or use the `api.conf` file provided.
Copy the `api.conf` file to the `/etc/nginx/sites-enabled/` folder.
```sh
  sudo cp ./api.conf /etc/nginx/sites-enabled/
```

Finally, you can test nginx and restart it when it shows no errors.

```sh
  sudo nginx -t
  sudo systemctl restart nginx
```


**Disclaimer:** To view logs in case of an error in nginx you need to use the command sudo systemctl status nginx.service.

## SSL Certificate
Follow the instructions at [https://certbot.eff.org/](https://certbot.eff.org/)

## More

### Check full NGINX logs
If the default conf.nginx is NOT modified, NGINX will save logs in the files `access_log /var/log/nginx/access.log` and `error_log /var/log/nginx/error.log`

### NGINX with load balancer
To setup the load balancer, in the `proxy_pass` user an upstream instead of an URL, an example using round-robin technique is shown in the `./api.conf` file.