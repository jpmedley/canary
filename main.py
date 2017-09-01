#!/usr/bin/env python


import logging
import os
from webapp2 import RequestHandler
from webapp2 import WSGIApplication

CS_POLICY = "default-src 'self'; connect-src 'self'; \
child-src https://www.youtube.com; font-src http://fonts.gstatic.com; \
report-uri http://oncomingstorm.dls.corp.google.com:8080/report; \
img-src 'self'; media-src https://www.youtube.com; script-src 'self'; \
style-src 'self' http://fonts.googleapis.com;"

def Nonce():
  return os.urandom(32).encode('base64')

class MainHandler(RequestHandler):
  def get(self):
    self.response.out.headers['Content-Security-Policy'] = CS_POLICY + " referrer origin;"
    self.response.write('<html><head>')
    self.response.write('<title>Milkbone Server</title>')
    self.response.write('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">')
    self.response.write('<meta name="viewport" content="width=device-width,initial-scale=1">')
    self.response.write('</head><body>')
    self.response.write('<h1>Milkbone Server</title>')
    self.response.write('<h2>Feature Pages</h2>')
    self.response.write('<p><a href="csp.html">Content Security Policy Level 2 - HTTP Headers</a> (M41)</p>')
    self.response.write('<p><a href="ec6-examples.html">ECMAScript 6 Examples</a> (M41)</p>')
    self.response.write('<p><a href="reportvalidity.html">reportValidity()</a> (M40)</p>')
    self.response.write('<p><a href="meta-theme-color.html">meta-theme-color</a> (M39, mobile)</p>')
    self.response.write('<p><a href="register-element.html">registerElement()</a> (M31)</p>')
    self.response.write('<h2>Test Pages</h2>')
    self.response.write('<p><a href="basic-message.html">Basic ServiceWorker Message</a></p>')
    self.response.write('<p><a href="service-worker-best-practice.html">Service Worker Best Practice</a></p>')
    self.response.write('<p><a href="scripttest.html">Script Test</a></p>')
    self.response.write('<p><a href="async-await.html">async/await</a></p>')
    self.response.write('</body></html>')
    report = self.request.get('Reaction')
    logging.info(self.request)
    logging.info(report)

class Redirect(RequestHandler):
  def get(self):
    self.response.out.headers['Content-Security-Policy'] = CS_POLICY
    self.redirect("/")

class Report(RequestHandler):
  def post(self):
    report = self.request.get('Reaction')
    logging.info(self.request)
    logging.info(report)

app = WSGIApplication([
    ('/', MainHandler),
    ('/red', Redirect),
    ('/report', Report),
], debug=True)
