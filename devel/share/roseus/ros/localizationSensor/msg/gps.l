;; Auto-generated. Do not edit!


(when (boundp 'localizationSensor::gps)
  (if (not (find-package "LOCALIZATIONSENSOR"))
    (make-package "LOCALIZATIONSENSOR"))
  (shadow 'gps (find-package "LOCALIZATIONSENSOR")))
(unless (find-package "LOCALIZATIONSENSOR::GPS")
  (make-package "LOCALIZATIONSENSOR::GPS"))

(in-package "ROS")
;;//! \htmlinclude gps.msg.html


(defclass localizationSensor::gps
  :super ros::object
  :slots (_sensorSerial _timeSec _timeUsec _oritention _longitude _latitude ))

(defmethod localizationSensor::gps
  (:init
   (&key
    ((:sensorSerial __sensorSerial) "")
    ((:timeSec __timeSec) 0)
    ((:timeUsec __timeUsec) 0)
    ((:oritention __oritention) 0)
    ((:longitude __longitude) 0)
    ((:latitude __latitude) 0)
    )
   (send-super :init)
   (setq _sensorSerial (string __sensorSerial))
   (setq _timeSec (round __timeSec))
   (setq _timeUsec (round __timeUsec))
   (setq _oritention (round __oritention))
   (setq _longitude (round __longitude))
   (setq _latitude (round __latitude))
   self)
  (:sensorSerial
   (&optional __sensorSerial)
   (if __sensorSerial (setq _sensorSerial __sensorSerial)) _sensorSerial)
  (:timeSec
   (&optional __timeSec)
   (if __timeSec (setq _timeSec __timeSec)) _timeSec)
  (:timeUsec
   (&optional __timeUsec)
   (if __timeUsec (setq _timeUsec __timeUsec)) _timeUsec)
  (:oritention
   (&optional __oritention)
   (if __oritention (setq _oritention __oritention)) _oritention)
  (:longitude
   (&optional __longitude)
   (if __longitude (setq _longitude __longitude)) _longitude)
  (:latitude
   (&optional __latitude)
   (if __latitude (setq _latitude __latitude)) _latitude)
  (:serialization-length
   ()
   (+
    ;; string _sensorSerial
    4 (length _sensorSerial)
    ;; int64 _timeSec
    8
    ;; int64 _timeUsec
    8
    ;; int64 _oritention
    8
    ;; int64 _longitude
    8
    ;; int64 _latitude
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; string _sensorSerial
       (write-long (length _sensorSerial) s) (princ _sensorSerial s)
     ;; int64 _timeSec
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _timeSec (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _timeSec) (= (length (_timeSec . bv)) 2)) ;; bignum
              (write-long (ash (elt (_timeSec . bv) 0) 0) s)
              (write-long (ash (elt (_timeSec . bv) 1) -1) s))
             ((and (class _timeSec) (= (length (_timeSec . bv)) 1)) ;; big1
              (write-long (elt (_timeSec . bv) 0) s)
              (write-long (if (>= _timeSec 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _timeSec s)(write-long (if (>= _timeSec 0) 0 #xffffffff) s)))
     ;; int64 _timeUsec
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _timeUsec (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _timeUsec) (= (length (_timeUsec . bv)) 2)) ;; bignum
              (write-long (ash (elt (_timeUsec . bv) 0) 0) s)
              (write-long (ash (elt (_timeUsec . bv) 1) -1) s))
             ((and (class _timeUsec) (= (length (_timeUsec . bv)) 1)) ;; big1
              (write-long (elt (_timeUsec . bv) 0) s)
              (write-long (if (>= _timeUsec 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _timeUsec s)(write-long (if (>= _timeUsec 0) 0 #xffffffff) s)))
     ;; int64 _oritention
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _oritention (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _oritention) (= (length (_oritention . bv)) 2)) ;; bignum
              (write-long (ash (elt (_oritention . bv) 0) 0) s)
              (write-long (ash (elt (_oritention . bv) 1) -1) s))
             ((and (class _oritention) (= (length (_oritention . bv)) 1)) ;; big1
              (write-long (elt (_oritention . bv) 0) s)
              (write-long (if (>= _oritention 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _oritention s)(write-long (if (>= _oritention 0) 0 #xffffffff) s)))
     ;; int64 _longitude
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _longitude (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _longitude) (= (length (_longitude . bv)) 2)) ;; bignum
              (write-long (ash (elt (_longitude . bv) 0) 0) s)
              (write-long (ash (elt (_longitude . bv) 1) -1) s))
             ((and (class _longitude) (= (length (_longitude . bv)) 1)) ;; big1
              (write-long (elt (_longitude . bv) 0) s)
              (write-long (if (>= _longitude 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _longitude s)(write-long (if (>= _longitude 0) 0 #xffffffff) s)))
     ;; int64 _latitude
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _latitude (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _latitude) (= (length (_latitude . bv)) 2)) ;; bignum
              (write-long (ash (elt (_latitude . bv) 0) 0) s)
              (write-long (ash (elt (_latitude . bv) 1) -1) s))
             ((and (class _latitude) (= (length (_latitude . bv)) 1)) ;; big1
              (write-long (elt (_latitude . bv) 0) s)
              (write-long (if (>= _latitude 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _latitude s)(write-long (if (>= _latitude 0) 0 #xffffffff) s)))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; string _sensorSerial
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _sensorSerial (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;; int64 _timeSec
#+(or :alpha :irix6 :x86_64)
      (setf _timeSec (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _timeSec (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;; int64 _timeUsec
#+(or :alpha :irix6 :x86_64)
      (setf _timeUsec (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _timeUsec (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;; int64 _oritention
#+(or :alpha :irix6 :x86_64)
      (setf _oritention (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _oritention (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;; int64 _longitude
#+(or :alpha :irix6 :x86_64)
      (setf _longitude (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _longitude (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;; int64 _latitude
#+(or :alpha :irix6 :x86_64)
      (setf _latitude (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _latitude (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;;
   self)
  )

(setf (get localizationSensor::gps :md5sum-) "b2d375cb43251e9d31a674ffc6746d6f")
(setf (get localizationSensor::gps :datatype-) "localizationSensor/gps")
(setf (get localizationSensor::gps :definition-)
      "#Header header
string sensorSerial
int64 timeSec
int64 timeUsec
int64 oritention
int64 longitude
int64 latitude

")



(provide :localizationSensor/gps "b2d375cb43251e9d31a674ffc6746d6f")


