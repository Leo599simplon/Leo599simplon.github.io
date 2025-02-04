# Cisco IOS (Routers and Switches) Cheat Sheet

Cheat sheet for Cisco Networking Labs, and Cisco IOS.
Can be used on: Cisco IOS and Microsoft Windows Vista, 7, 8, 8.1, 10.

- [Cisco IOS (Routers and Switches) Cheat Sheet](#cisco-ios-routers-and-switches-cheat-sheet)
  - [SWITCH/ROUTER](#switchrouter)
    - [Connecting to a switch/router using console port](#connecting-to-a-switchrouter-using-console-port)
      - [Setting up physical connection](#setting-up-physical-connection)
      - [Using PuTTY/TeraTerm to connect to a switch/router](#using-puttyteraterm-to-connect-to-a-switchrouter)
    - [View switch/router info](#view-switchrouter-info)
    - [Enabling and disabling "EXEC Mode"](#enabling-and-disabling-exec-mode)
    - [View and setting time](#view-and-setting-time)
      - [View time](#view-time)
      - [Setting time](#setting-time)
    - [Configuring terminal](#configuring-terminal)
      - [Setting hostname](#setting-hostname)
      - [Setting password](#setting-password)
        - [EXEC Mode](#exec-mode)
        - [TELNET/SSH](#telnetssh)
        - [Console connection](#console-connection)
      - [Encrypting passwords](#encrypting-passwords)
      - [Setting SSH password](#setting-ssh-password)
      - [Allow only SSH connections](#allow-only-ssh-connections)
      - [Setting a domain name](#setting-a-domain-name)
      - [Generating RSA crypto key](#generating-rsa-crypto-key)
      - [Changing SSH time-out](#changing-ssh-time-out)
      - [Changing SSH authentication retry limit](#changing-ssh-authentication-retry-limit)
      - [Assigning ports to an interface](#assigning-ports-to-an-interface)
      - [Trunking an interface](#trunking-an-interface)
      - [Enabling port security](#enabling-port-security)
      - [Assign MAC to port (port security)](#assign-mac-to-port-port-security)
      - [Disabling HTTP server](#disabling-http-server)
      - [Disabling DNS Lookup](#disabling-dns-lookup)
      - [Setting a MOTD banner](#setting-a-motd-banner)
      - [Enabling/Disabling logging](#enablingdisabling-logging)
      - [Configuring an interface](#configuring-an-interface)
      - [Configuring the default gateway](#configuring-the-default-gateway)
      - [Configuring a range of interfaces](#configuring-a-range-of-interfaces)
      - [Configuring ACL](#configuring-acl)
      - [Apply ACL](#apply-acl)
      - [Creating and naming a VLAN](#creating-and-naming-a-vlan)
      - [Deleting a VLAN](#deleting-a-vlan)
      - [Configuring a new MAC address for an interface](#configuring-a-new-mac-address-for-an-interface)
      - [Enabling/Disabling RIP routing](#enablingdisabling-rip-routing)
      - [Setting an interface to be passive (RIP)](#setting-an-interface-to-be-passive-rip)
      - [Advertising networks (RIP)](#advertising-networks-rip)
      - [Enabling/Disabling Auto-Summarization (RIPv2 Only)](#enablingdisabling-auto-summarization-ripv2-only)
      - [Viewing OSPF databases/tables](#viewing-ospf-databasestables)
        - [Adjacency Database - Neighbor Table](#adjacency-database---neighbor-table)
        - [Link-State Database - Topology Table](#link-state-database---topology-table)
        - [Forwarding Database - Routing Table](#forwarding-database---routing-table)
      - [Setting up a static route](#setting-up-a-static-route)
      - [Setting up default route](#setting-up-default-route)
      - [Enabling IPv6 uni-cast routing](#enabling-ipv6-uni-cast-routing)
    - [Enabling support for IPv6 on 2960 Switch Database Manager](#enabling-support-for-ipv6-on-2960-switch-database-manager)
    - [View running configuration](#view-running-configuration)
    - [Saving configuration](#saving-configuration)
    - [Resetting configuration](#resetting-configuration)
    - [View status of connected interfaces](#view-status-of-connected-interfaces)
    - [View routing protocol](#view-routing-protocol)
    - [View ACL](#view-acl)
    - [View SSH configuration and keys](#view-ssh-configuration-and-keys)
    - [View MAC address of switch](#view-mac-address-of-switch)
    - [View ARP table of the switch/router](#view-arp-table-of-the-switchrouter)
    - [View MAC address table](#view-mac-address-table)
    - [View VLAN and port assignments](#view-vlan-and-port-assignments)
    - [View interface status](#view-interface-status)
    - [View trunked interfaces](#view-trunked-interfaces)
    - [View IP address status of interface](#view-ip-address-status-of-interface)
    - [Clear MAC address table](#clear-mac-address-table)
    - [View routing table](#view-routing-table)
  - [COMPUTER](#computer)
    - [Configuring IPv4/IPv6 address](#configuring-ipv4ipv6-address)
    - [Opening Command Prompt](#opening-command-prompt)
    - [View interfaces, IP, MAC address, gateway, subnet mask](#view-interfaces-ip-mac-address-gateway-subnet-mask)
    - [View port security](#view-port-security)
      - [Of interface](#of-interface)
      - [Of interfaces](#of-interfaces)
    - [Pinging](#pinging)
    - [View ARP table of the computer](#view-arp-table-of-the-computer)
  - [About](#about)
  
## SWITCH/ROUTER

### Connecting to a switch/router using console port

#### Setting up physical connection

1. Connect a RJ-45 Ethernet cable to the port labelled **"Console"** on the (back of the) switch / (front of the) router.
2. Connect the other end to the correct port on the **"Patch Panel"**.
3. Connect the ethernet end of the **"Console Cable"** to the port on the wall, serial end to the computer's COM (serial) port.
4. [Optional] Connect **"USB to DB9"** adapter to the serial end of the **"Console Cable"**.
5. [Optional] Connect the USB end of the **"USB to DB9"** adapter to the computer.

#### Using PuTTY/TeraTerm to connect to a switch/router

1. Open PuTTY/TeraTerm.
2. Select **"Serial"** connection.
3. Choose the correct **"COM Port"**.
4. Click on "Connect".
5. If nothing shows up, hit *ENTER* a couple of times.
6. Say *no* to the prompt.

```
Would you like to enter the initial configuration dialog? [yes/no]: n
```

### View switch/router info

```
Switch> show version
Cisco IOS Software, C2960 Software (C2960-LANBASEK9-M), Version 15.0(2)SE, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2012 by Cisco Systems, Inc.
Compiled Sat 28-Jul-12 00:29 by prod_rel_team

ROM: Bootstrap program is C2960 boot loader
BOOTLDR: C2960 Boot Loader (C2960-HBOOT-M) Version 12.2(53r)SEY3, RELEASE SOFTWARE (fc1)

Switch uptime is 2 minutesSystem returned to ROM by power-onSystem image file is "flash://c2960-lanbasek9-mz.150-2.SE.bin"
<output omitted>
```

### Enabling and disabling "EXEC Mode"

> **"Switch>"** --> No EXEC Mode
> 
> **"Switch#"** --> EXEC Mode

```
Switch> enable
Switch# |
```

```
Switch# disable
Switch> |
```

```
Switch# exit
Switch> |
```

### View and setting time

#### View time

```
Switch> show clock
*00:30:05.261 UTC Mon Mar 1 1993
```

#### Setting time

```
Switch# clock set 14:56:24 Oct 02 2019
*Oct 02 14:56:24.000: %SYS-6-CLOCKUPDATE: System clock has been updated from 00:31:43 UTC Mon Mar 1 1993 to 14:56:24 UTC Wed Oct 02 2019, configured from console by console.
```

### Configuring terminal

> **"Switch#"** --> Not in configure mode
> 
> **"Switch(config)#"** --> In configure mode

```
Switch# conf t
Switch(config)# |
```

```
Switch(config)# exit
Switch# |
```

#### Setting hostname

```
Switch(config)# hostname NAME
NAME(config)#
```

```
Switch(config)# hostname S1
S1(config)#
```

#### Setting password

##### EXEC Mode

```
Switch(config)# enable secret PASSWORD
```

```
Switch(config)# enable secret thisismypassword
```

##### TELNET/SSH

```
Switch(config)# line vty 0 4
Switch(config-line)# password PASSWORD
Switch(config-line)# login
Switch(config-line)# exit
Switch(config)# |
```

```
Switch(config)# line vty 0 4
Switch(config-line)# password thisismypassword
Switch(config-line)# login
Switch(config-line)# exit
Switch(config)# |
```

##### Console connection

```
Switch(config)# line con 0
Switch(config-line)# password PASSWORD
Switch(config-line)# login
Switch(config-line)# exit
Switch(config)# |
```

```
Switch(config)# line con 0
Switch(config-line)# password thisismypassword
Switch(config-line)# login
Switch(config-line)# exit
Switch(config)# |
```

#### Encrypting passwords

```
Switch(config)# service password-encryption
Switch(config)# exit
Switch# |
```

#### Setting SSH password

```
Switch(config)# username USERNAME privilege PRIVILEGE secret PASSWORD
```

```
Switch(config)# username admin privilege 15 secret myP4ssw0rd
```

#### Allow only SSH connections

```
Switch(config)# line vty 0 15
Switch(config-line)# transport input ssh
Switch(config-line)# login local
```

> Enabling SSH version 2 is recommended.

```
Switch(config)# ip ssh version 2
```

#### Setting a domain name

```
Switch(config)# ip domain-name NAME
```

```
Switch(config)# ip domain-name cisco.com
```

#### Generating RSA crypto key

> A domain name must be set before this step.

```
Switch(config)# crypto key generate rsa modulus MODULUS
```

```
Switch(config)# crypto key generate rsa modulus 1024
```

#### Changing SSH time-out

```
Switch(config)# ip ssh time-out TIME_OUT
```

```
Switch(config)# ip ssh time-out 75
```

#### Changing SSH authentication retry limit

```
Switch(config)# ip ssh authentication-retries LIMIT
```

```
Switch(config)# ip ssh authentication-retries 2
```

#### Assigning ports to an interface

```
Switch(config)# interface PORT
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access INTERFACE_NAME INTERFACE_NO
```

```
Switch(config)# interface f0/5
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 99
```

#### Trunking an interface

```
Switch(config)# interface INTERFACE_NAME INTERFACE_NO
Switch(config-if)# switchport mode trunk
```

```
Switch(config)# interface f0/1
Switch(config-if)# switchport mode trunk
```

#### Enabling port security

> Entering the switchport port-security command sets the maximum MAC addresses to 1 and the violation action to shutdown. The switchport port-security maximum and switchport port-security violation commands can be used to change the default behavior.

```
Switch(config-if)# switchport port-security
```

#### Assign MAC to port (port security)

```
Switch(config-if)# switchport port-security mac-address MAC_ADDRESS
```

```
Switch(config-if)# switchport port-security mac-address ABCD.EFAB.CDEF
```

> You can use *"sticky"* parameter instead of the *MAC_ADDRESS* to enable dynamic learning.

```
Switch(config-if)# switchport port-security mac-address sticky
```

#### Disabling HTTP server

> Used for web interface/management, but it's not secure, so we disable it.

```
Switch(config)# no ip http server
```

#### Disabling DNS Lookup

```
Switch(config)# no ip domain-lookup
```

#### Setting a MOTD banner

```
Switch(config)# banner motd #
Enter TEXT message. End with the character '#'.
Unauthorized access is strictly prohibited and prosecuted to the full extent of the law. #
Switch(config)# |
```

#### Enabling/Disabling logging

To enable:

```
Switch(config)# logging synchronous
```

To disable:

```
Switch(config)# no logging synchronous
```

#### Configuring an interface

> *"no shut"* command enables the interface, *"shut"* command disables the interface.
> 
> Replace *"ip"* with *"ipv6"* to set the IPv6 instead of IPv4.
> 
> Add *"link-local"* at the end (of IPv6 set command) to set Link-Local address.
> 
> If it doesn't work on 2960 Switch, take a look at [Enabling support for IPv6 on 2960 Switch Database Manager](#enabling-support-for-ipv6-on-2960-switch-database-manager).
>
> Configure **"vlan 99"** to enable web interface.

```
Switch(config)# interface INTERFACE_NAME INTERFACE_NO
Switch(config-if)# ip address IP_ADDRESS SUBNET_MASK
Switch(config-if)# no shut
```

```
Switch(config)# interface gigabitethernet 0/0
Switch(config-if)# ip address 192.168.1.0 255.255.255.0
Switch(config-if)# no shut
```

> To configure the duplex mode, auto-MDIX, and speed of an interface/port, use the following commands.
> 
> When using auto-MDIX on an interface, the interface speed and duplex must be set to auto.

```
Switch(config)# interface INTERFACE_NAME INTERFACE_NO
Switch(config-if)# duplex MODE(HALF/FULL/AUTO)
Switch(config-if)# speed SPEED(IN Mbps/AUTO)
Switch(config-if)# mdix (AUTO)
```

```
Switch(config)# interface gigabitethernet 0/0
Switch(config-if)# duplex full
Switch(config-if)# speed 100
```

```
Switch(config)# interface gigabitethernet 0/0
Switch(config-if)# duplex auto
Switch(config-if)# speed auto
Switch(config-if)# mdix auto
```

#### Configuring the default gateway

```
Switch(config)# ip default-gateway IP_ADDRESS
```

```
Switch(config)# ip default-gateway 192.168.1.1
```

#### Configuring a range of interfaces

```
Switch(config)# interface range INTERFACE_NAME INTERFACE_NO_START - INTERFACE_NO_END
```

```
Switch(config)# interface range f0/0 - 16
```

#### Configuring ACL

```
Switch(config)# ip access-list standard NAME
Switch(config-std-nacl)# permit host IP_ADDRESS
Switch(config-std-nacl)# permit IP_ADDRESS WILDCARD
Switch(config-std-nacl)# deny host IP_ADDRESS
Switch(config-std-nacl)# deny IP_ADDRESS WILDCARD
```

```
Switch(config)# ip access-list standard ADMIN-MGT
Switch(config-std-nacl)# permit host 192.168.1.3
Switch(config-std-nacl)# permit 192.168.1.4 0.0.0.3
Switch(config-std-nacl)# deny host 192.168.1.9
Switch(config-std-nacl)# deny 192.168.1.12 0.0.0.4
```

#### Apply ACL

```
Switch(config)# line LINE
Switch(config-line)# access-class NAME in
```

```
Switch(config)# line vty 0 15
Switch(config-line)# access-class ADMIN-MGT in
```

#### Creating and naming a VLAN

```
Switch(config)# vlan NO
Switch(config-INTERFACE_NAME)# name NAME
```

```
Switch(config)# vlan 99
Switch(config-vlan)# name Management
```

#### Deleting a VLAN

```
Switch(config)# no vlan NO
```

```
Switch(config)# no vlan 30
```

#### Configuring a new MAC address for an interface

```
Switch(config)# interface INTERFACE_NAME INTERFACE_NO
Switch(config-if)# mac-address MAC_ADDRESS
```

```
Switch(config)# interface vlan 99
Switch(config-if)# mac-address ABCD.EFAB.CDEF
```

> Use *"no mac-address"* command to remove hard-coded MAC address.

```
Switch(config)# interface INTERFACE_NAME INTERFACE_NO
Switch(config-if)# no mac-address MAC_ADDRESS
```

```
Switch(config)# interface vlan 99
Switch(config-if)# no mac-address ABCD.EFAB.CDEF
```

#### Enabling/Disabling RIP routing

> *"router rip"* to enable
> 
> *"no router rip"* to disable
> 
> *"version VERSION"* -> *"version 2"* to set the RIP version, don't specify to use default version, 1
> 
> Configuring *"version 1"* enables RIPv1 only, while configuring *"no version"* returns the router to the default setting of sending version 1 updates but listening for version 1 and version 2 updates.

```
R1(config)# router rip
R1(config-router)# version 2
```

#### Setting an interface to be passive (RIP)

By default, RIP updates are forwarded out all RIP-enabled interfaces. However, RIP updates really only need to be sent out interfaces that are connected to other RIP enabled routers.

Use this to stop routing updates out the specified interface. This process prevents unnecessary routing traffic on the LAN. However, the network that the specified interface belongs to is still advertised in routing updates that are sent out across other interfaces.

```
R1(config-router)# passive-interface INTERFACE_NAME INTERFACE_NO
```

```
R1(config-router)# passive-interface gigabitethernet 0/0
```

> As an alternative, all interfaces can be made passive using the *"passive-interface"* default command.

```
R1(config-router)# passive-interface default
```

> Interfaces that should not be passive can be re-enabled using the *"no passive-interface"* command.

```
R1(config-router)# no passive-interface INTERFACE_NAME INTERFACE_NO
```

#### Advertising networks (RIP)

Use this to enable RIP routing on a network.

> An ip address, such as 192.168.1.32 with the subnet mask 255.255.255.0, will be automatically registered as 192.168.1.0

```
R1(config-router)# network IP_ADDRESS
```

```
R1(config-router)# network 192.168.1.0
```

#### Enabling/Disabling Auto-Summarization (RIPv2 Only)

> *"auto-summary"* to enable
> 
> *"no auto-summary"* to disable

```
R1(config-router)# no auto-summary
```

#### Viewing OSPF databases/tables

##### Adjacency Database - Neighbor Table

List of all neighbor routers to which a router has established bidirectional communication. This table is unique for each router.

```
show ip ospf neighbor
```

##### Link-State Database - Topology Table

Lists information about all other routers in the network. This database represents the network topology. All routers within an area have identical LSDB.

```
show ip ospf database
```

##### Forwarding Database - Routing Table

List of routes generated when an algorithm is run on the link-state database. The routing table of each router is unique and contains information on how and where to send packets to other routers.

```
show ip route
```

#### Setting up a static route

You can use just one, or both interface and ip as destination.

> Replace *"ip"* with *"ipv6"* to set up IPv6 static route

```
R1(config)# ip route IP_ADDRESS SUBNET_MASK [INTERFACE_NAME INTERFACE_NO] [DESTINATION_IP_ADDRESS]
```

```
R1(config)# ip route 192.168.1.1 255.255.255.0 g0/0 192.168.5.10
```

```
R1(config)# ip route 192.168.1.1 255.255.255.0 g0/0
```

```
R1(config)# ip route 192.168.1.1 255.255.255.0 192.168.5.10
```

#### Setting up default route

> In static routing, use *"ip route 0.0.0.0 0.0.0.0"*
> 
> Replace *"ip"* with *"ipv6"* to set up IPv6 default route.
> 
> In IPv6, *"0.0.0.0 0.0.0.0"* becomes *"::/0"*

```
R1(config)# ip route 0.0.0.0 0.0.0.0 [INTERFACE_NAME INTERFACE_NO] [DESTINATION_IP_ADDRESS]
```

```
R1(config)# ip route 0.0.0.0 0.0.0.0 g0/0 192.168.5.10
```

```
R1(config)# ipv6 route ::/0 g0/0 192.168.5.10
```

```
R1(config)# ip route 0.0.0.0 0.0.0.0 g0/0
```

```
R1(config)# ip route 0.0.0.0 0.0.0.0 192.168.5.10
```

> In dynamic routing, use *"default-information originate"*. This instructs R1 to originate default information, by propagating the static default route in RIP updates.

```
R1(config)# router rip
R1(config-router)# default-information originate
```

#### Enabling IPv6 uni-cast routing

```
Router(config)# ipv6 unicast-routing
```

### Enabling support for IPv6 on 2960 Switch Database Manager

> Do this if the switch gives an error when you try to set IPv6 address in config mode.

```
Switch# sdm prefer dual-ipv4-and-ipv6 default
Switch# reload
>>>>>>> 4f2768ae2c230073f420caf9ae04145c3b91b36a
```

### View running configuration

```
S1# show run
Building configuration...
Current configuration : 1508 bytes
!
! Last configuration change at 00:06:11 UTC Mon Mar 1 1993
!
version 15.0
no service pad
service timestamps debug datetime msec
service timestamps log datetime msec
no service password-encryption
!
hostname S1
!
<output omitted>
```

### Saving configuration

```
Switch# copy running-config startup-config
Destination filename [startup-config]? [Enter]
Building configuration...
[OK]
Switch# |
```

### Resetting configuration

1. Delete VLAN configuration.

    ```
    Switch# delete vlan.dat
    Delete filename [vlan.dat]? y
    Delete flash:/vlan.dat? [confirm] y
    Switch# |
    ```

2. Erase startup-config.

    ```
    Switch# erase startup-config
    Erasing the nvram filesystem will remove all configuration files! Continue? [confirm] y
    [OK]
    Erase of nvram: complete
    Switch# |
    ```

3. Reload the switch.

    ```
    Switch# reload
    Proceed with reload? [confirm] y
    System configuration has been modified. Save? [yes/no]: n
    ```

### View status of connected interfaces

```
Switch# show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  up                    up
FastEthernet0/1        unassigned      YES unset  up                    up
FastEthernet0/2        unassigned      YES unset  down                  down
FastEthernet0/3        unassigned      YES unset  down                  down
FastEthernet0/4        unassigned      YES unset  down                  down
FastEthernet0/5        unassigned      YES unset  down                  down
<output omitted>
```

### View routing protocol

Use this to verify RIP routing.

```
R1# show ip protocols
*** IP Routing is NSF aware ***

Routing Protocol is "rip"
<output omitted>
```

### View ACL

```
Switch# show ip access-lists
Standard IP access list ADMIN-MGT
    10 permit 192.168.1.3 (2 matches)
    20 permit 192.168.1.4, wildcard bits 0.0.0.3 (2 matches)
```

### View SSH configuration and keys

```
Switch# show ssh
```

```
Switch# show ip ssh
```

### View MAC address of switch

```
Switch# show interfaces vlan 1
Vlan1 is up, line protocol is up
    Hardware is EtherSVI, address is 001b.0c6d.8f40 (bia 001b.0c6d.8f40)
    Internet address is 192.168.1.1/24
<output omitted>
```

### View ARP table of the switch/router

```
Switch# show arp
Protocol  Address          Age (min)  Hardware Addr   Type   Interface
Internet  192.168.1.1             -   001b.0c6d.8f40  ARPA   Vlan1
Internet  192.168.1.3             0   5c26.0a24.2a60  ARPA   Vlan1
```

### View MAC address table

Use [MAC Vendor Lookup](https://www.macvendorlookup.com/) to lookup the vendor of the device using the MAC address.

```
Switch# show mac address-table
          Mac Address Table
-------------------------------------------
Vlan    Mac Address       Type        Ports
----    -----------       --------    -----
 All    0100.0ccc.cccc    STATIC      CPU
 All    0100.0ccc.cccd    STATIC      CPU
 All    0180.c200.0000    STATIC      CPU
 All    0180.c200.0001    STATIC      CPU
 All    0180.c200.0002    STATIC      CPU
 All    0180.c200.0003    STATIC      CPU
 All    0180.c200.0004    STATIC      CPU
 All    0180.c200.0005    STATIC      CPU
 All    0180.c200.0006    STATIC      CPU
 All    0180.c200.0007    STATIC      CPU
 All    0180.c200.0008    STATIC      CPU
 All    0180.c200.0009    STATIC      CPU
 All    0180.c200.000a    STATIC      CPU
 All    0180.c200.000b    STATIC      CPU
 All    0180.c200.000c    STATIC      CPU
 All    0180.c200.000d    STATIC      CPU
 All    0180.c200.000e    STATIC      CPU
 All    0180.c200.000f    STATIC      CPU
 All    0180.c200.0010    STATIC      CPU
 All    ffff.ffff.ffff    STATIC      CPU
   1    5c26.0a24.2a60    DYNAMIC     Fa0/6
Total Mac Addresses for this criterion: 21
```

### View VLAN and port assignments

```
Switch# show vlan brief
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/1, Fa0/2, Fa0/3, Fa0/4
                                                Fa0/5, Fa0/7, Fa0/8, Fa0/9
                                                Fa0/10, Fa0/11, Fa0/12, Fa0/13
                                                Fa0/14, Fa0/15, Fa0/16, Fa0/17
                                                Fa0/18, Fa0/19, Fa0/20, Fa0/21
                                                Fa0/22, Fa0/23, Fa0/24, Gi0/1
                                                Gi0/2
10   Student                          active    Fa0/6
20   Faculty                          active
99   Management                       active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
```

### View interface status

> You can view the number, and the types of errors using this command.

```
Switch# show interfaces F0/1
```

### View trunked interfaces

```
Switch# show interfaces trunk

Port        Mode             Encapsulation  Status        Native vlan
Fa0/1       desirable        802.1q         trunking      1

Port        Vlans allowed on trunk
Fa0/1       1-4094

Port        Vlans allowed and active in management domain
Fa0/1       1,10,20,99

Port        Vlans in spanning tree forwarding state and not pruned
Fa0/1       1,10,20,99
```

### View IP address status of interface

> Replace *"ip"* with *"ipv6"* to view the IPv6 config instead of IPv4 config.

```
Router# show ip interface INTERFACE_NAME INTERFACE_NO
```

```
Router# show ipv6 interface g0/0
GigabitEthernet0/0 is up, line protocol is up
  IPv6 is enabled, link-local address is FE80::1
  No Virtual link-local address(es):
    Global unicast address(es):
      2001:DB8:ACAD:A::1, subnet is 2001:DB8:ACAD:A::/64 [EUI]
    Joined group address(es):
      FF02::1
      FF02::2
      FF02::1:FF00:1
    MTU is 1500 bytes
<output omitted>
```

### Clear MAC address table

```
Switch# clear mac address-table dynamic
```

**Wait 10 seconds.**

### View routing table

> **C**: Direct Connection
> 
> **L**: Local Connection
> 
> **R**: Remote Connection
> 
> **S**: Static Route
> 
> **D**: Automatically learned route using EIGRP routing protocol
> 
> **O**: Automatically learned route using OSPF routing protocol
> 
> If there is the symbol **"*"** next to the route source identifier (C/L/R/S/D/O), it means that it was manually configured
> 
> Replace *"ip"* with *"ipv6"* to view IPv6 routing table.

```
Router# show ip route
```

![Routing entry image](https://i.imgur.com/V6RKYCW.png)

## COMPUTER

### Configuring IPv4/IPv6 address

1. Open **"Control Panel"**.
2. Go to **"Network and Internet" > "Network and Sharing Center" > ADAPTER_NAME > "Properties" > "Internet Protocol Version 4 (TCP/IPv4)" / "Internet Protocol Version 6 (TCP/IPv6)" > "Properties"**.
3. Select **"Use the following IP address:"**.
4. Type the IP, subnet mask/metric, [gateway].
5. Press *"OK"*.

### Opening Command Prompt

1. Press *WIN* + *R*.
2. Type *"cmd"*.
3. Hit *ENTER*, or click *"Run"*.

### View interfaces, IP, MAC address, gateway, subnet mask

```
C:\Users\USERNAME\> ipconfig /all

Windows IP Configuration

   Host Name . . . . . . . . . . . . : COMPUTERNAME
   Primary Dns Suffix  . . . . . . . :
   Node Type . . . . . . . . . . . . : Hybrid
   IP Routing Enabled. . . . . . . . : No
   WINS Proxy Enabled. . . . . . . . : No

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . :
   Description . . . . . . . . . . . : Intel(R) Ethernet Connection (2) I219-V
   Physical Address. . . . . . . . . : 4C-CD-6A-AE-0D-2E
   DHCP Enabled. . . . . . . . . . . : Yes
   Autoconfiguration Enabled . . . . : Yes
   Link-local IPv6 Address . . . . . : fe81::ac43:6f38:d9e2:189c%15(Preferred)
   IPv4 Address. . . . . . . . . . . : 192.168.1.13(Preferred)
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Lease Obtained. . . . . . . . . . : Wednesday, 2 October 2019 11:51:27
   Lease Expires . . . . . . . . . . : Thursday, 3 October 2019 11:53:30
   Default Gateway . . . . . . . . . : 192.168.1.1
   DHCP Server . . . . . . . . . . . : 192.168.1.1
   DHCPv6 IAID . . . . . . . . . . . : 374131818
   DHCPv6 Client DUID. . . . . . . . : 00-01-00-01-24-C6-10-C5-00-E0-4A-68-A4-D6
   DNS Servers . . . . . . . . . . . : 1.1.1.1
   NetBIOS over Tcpip. . . . . . . . : Enabled

C:\Users\USERNAME\> |
```

### View port security

#### Of interface

```
Switch# show port-security INTERFACE_NAME INTERFACE_NO
```

```
Switch# show port-security interface f0/5
```

#### Of interfaces

```
Switch# show port-security address
                Secure Mac Address Table
------------------------------------------------------------------------
Vlan     Mac Address       Type                 Ports      Remaining Age
                                                            (mins)
----     -----------       ----                 -----      -------------
  99     30f7.0da3.1821    SecureConfigured     Fa0/5
------------------------------------------------------------------------
Total Addresses in System (excluding one mac per port)     :0
Max Addresses limit in System (excluding one mac per port) :8192
```

### Pinging

```
C:\Users\USERNAME\> ping IP_ADDRESS_OR_SITE

Pinging IP_ADDRESS_OR_SITE [IP_OF_DESTINATION] with 32 bytes of data:
Reply from IP_OF_DESTINATION: bytes=32 time=15ms TTL=54
Reply from IP_OF_DESTINATION: bytes=32 time=14ms TTL=54
Reply from IP_OF_DESTINATION: bytes=32 time=11ms TTL=54
Reply from IP_OF_DESTINATION: bytes=32 time=12ms TTL=54

Ping statistics for IP_OF_DESTINATION:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 11ms, Maximum = 15ms, Average = 13ms

C:\Users\USERNAME\> |
```

### View ARP table of the computer

> **ff-ff-ff-ff-ff-ff**: Multicast or broadcast.

```
C:\Users\USERNAME\> arp -a

Interface: 25.63.150.45 --- 0xa
  Internet Address      Physical Address      Type
  25.255.255.255        ff-ff-ff-ff-ff-ff     static
  224.0.0.22            01-00-5e-00-00-16     static
  224.0.0.251           01-00-5e-00-00-fb     static
  224.0.0.252           01-00-5e-00-00-fc     static
  239.255.255.250       01-00-5e-7f-ff-fa     static
  255.255.255.255       ff-ff-ff-ff-ff-ff     static

C:\Users\USERNAME\> |
```

---

## About

By Adil Atalay Hamamcıoğlu, a cyber security Engineering student at Tallinn University of Technology, 2019 - 2023.
Made this cheat-sheet to not to suffer in Cisco Networking Labs.

Info and images are from Cisco Networking Academy course.
