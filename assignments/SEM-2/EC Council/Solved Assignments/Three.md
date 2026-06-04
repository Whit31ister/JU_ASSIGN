# CSCU Assignment Unit 3 Answers

(Based on Assignment Unit-3) 

---

# SECTION A

## 1. Define IoT security and mention two common vulnerabilities in IoT devices.

IoT (Internet of Things) security refers to the protection of internet-connected devices, networks, and data from cyber threats and unauthorized access. Since IoT devices often collect sensitive information, securing them is essential. Two common vulnerabilities are weak default passwords and outdated firmware. Attackers can exploit these weaknesses to gain control of devices, steal data, or launch attacks against other systems connected to the network.

---

## 2. What are the risks of using public Wi-Fi networks?

Public Wi-Fi networks pose significant security risks because they are often unsecured and accessible to anyone. Attackers can intercept data transmitted over the network through techniques such as packet sniffing and man-in-the-middle attacks. Users may unknowingly expose sensitive information such as passwords, banking details, and personal data. Additionally, cybercriminals may create fake Wi-Fi hotspots to trick users into connecting and revealing confidential information.

---

## 3. Define remote working security and list two major threats associated with it.

Remote working security refers to the policies, technologies, and practices used to protect organizational data and systems when employees work outside the office environment. It ensures secure access to company resources from remote locations. Two major threats associated with remote work are phishing attacks, which target employees through fraudulent communications, and insecure network connections, which can allow attackers to intercept sensitive information transmitted between remote users and organizational systems.

---

## 4. What is data disposal? Why is it important in cybersecurity?

Data disposal is the process of permanently destroying or removing data from storage devices when it is no longer needed. Proper data disposal prevents unauthorized individuals from recovering sensitive information from discarded devices. It is important in cybersecurity because improper disposal can lead to data breaches, identity theft, financial loss, and regulatory violations. Secure disposal methods ensure that confidential information remains inaccessible even after devices are retired or sold.

---

## 5. What is multi-factor authentication (MFA)? How does it improve security?

Multi-Factor Authentication (MFA) is a security mechanism that requires users to provide two or more forms of verification before gaining access to a system. These factors may include something the user knows (password), something the user has (mobile device), or something the user is (fingerprint). MFA improves security by adding additional layers of protection, making it difficult for attackers to access accounts even if passwords are compromised.

---

# SECTION B

## 1. A user installs multiple IoT devices at home. Analyze the security risks, explain how attackers exploit such devices, and suggest countermeasures.

The increasing use of IoT devices such as smart cameras, smart speakers, and smart appliances provides convenience but also introduces cybersecurity risks. Many IoT devices have weak security settings, default passwords, and limited security updates.

Attackers can exploit these weaknesses by guessing default credentials, exploiting software vulnerabilities, or intercepting communications between devices. Once compromised, IoT devices may be used to spy on users, steal personal information, or become part of botnets used in large-scale cyberattacks.

Several countermeasures can reduce these risks. Users should change default passwords immediately after installation and use strong, unique passwords. Regular firmware updates should be applied to fix known vulnerabilities. Network segmentation can isolate IoT devices from critical systems. Enabling encryption, disabling unnecessary features, and using secure Wi-Fi networks also improve security.

By implementing these practices, users can significantly reduce the likelihood of IoT-related cyberattacks and protect their privacy and personal information.

---

## 2. An employee accesses company data using public Wi-Fi. Explain the risks, attack methods used by hackers, and best practices to secure remote access.

Using public Wi-Fi to access company resources can expose sensitive organizational information to cyber threats. Public networks often lack adequate security controls, making them attractive targets for attackers.

Hackers commonly use man-in-the-middle attacks to intercept communications between users and servers. Packet sniffing tools can capture usernames, passwords, and confidential data transmitted over unsecured networks. Attackers may also create rogue Wi-Fi hotspots that appear legitimate but are designed to steal user information.

To secure remote access, employees should use Virtual Private Networks (VPNs) to encrypt their internet traffic. Multi-factor authentication should be enabled to provide additional protection. Users should avoid accessing sensitive systems on unsecured networks whenever possible. Keeping devices updated, using endpoint security software, and verifying Wi-Fi network authenticity are also important practices.

Organizations should provide security awareness training and enforce remote access policies to ensure employees can work securely from remote locations while protecting company assets.

---

## 3. Explain the importance of secure data disposal by discussing risks of improper disposal and techniques used to securely erase data.

Secure data disposal is a critical cybersecurity practice that ensures sensitive information cannot be recovered from storage devices after they are no longer required. Improper disposal can result in serious security and privacy risks.

If devices containing confidential information are discarded without proper sanitization, attackers may recover financial records, customer information, intellectual property, or authentication credentials. Such incidents can lead to data breaches, legal consequences, reputational damage, and financial losses.

Several techniques are used for secure data disposal. Data wiping overwrites existing information multiple times, making recovery difficult. Cryptographic erasure destroys encryption keys used to protect stored data. Degaussing uses strong magnetic fields to erase magnetic storage media. Physical destruction methods such as shredding, crushing, or incinerating storage devices provide the highest level of assurance.

Organizations should establish disposal policies, maintain disposal records, and verify that all sensitive data has been securely removed before disposing of devices. Proper data disposal helps maintain confidentiality and compliance with security regulations.

---

# SECTION C

## 1. A smart home environment includes devices like Alexa, smart TV, and IoT appliances. Design a complete IoT security framework including threat mitigation and privacy protection strategies.

A smart home environment consists of interconnected devices that communicate through the internet to provide automation and convenience. While these devices improve daily life, they also introduce significant security and privacy risks. A comprehensive IoT security framework is necessary to protect users and devices from cyber threats.

The first component of the framework is **device security**. All default usernames and passwords should be changed immediately after installation. Strong, unique passwords must be used for every device. Multi-factor authentication should be enabled wherever available.

The second component is **network security**. IoT devices should be connected to a separate network segment or guest network to prevent attackers from accessing personal computers and sensitive systems. Strong Wi-Fi encryption such as WPA3 should be used.

The third component is **firmware and software management**. Devices should receive regular updates to address known vulnerabilities. Automatic update features should be enabled whenever possible.

Privacy protection is another important aspect. Users should disable unnecessary data collection features and carefully review privacy settings. Sensitive communications should be encrypted to prevent unauthorized interception.

Threat monitoring should also be implemented through firewalls, intrusion detection systems, and security monitoring tools. Suspicious activities should be investigated immediately.

Finally, user awareness plays a vital role. Family members should understand common threats such as phishing attacks and malicious applications. Through strong authentication, secure networking, regular updates, privacy controls, and continuous monitoring, organizations and households can create a secure and resilient IoT environment.

---

## 2. Discuss remote working security in detail by explaining risks, secure communication practices, and guidelines for safe remote access to organizational resources.

Remote working has become increasingly common due to advances in communication technology. While it offers flexibility and productivity benefits, it also creates cybersecurity challenges that organizations must address to protect sensitive information.

One major risk is the use of unsecured networks, especially public Wi-Fi. Attackers can intercept communications and steal credentials or confidential data. Phishing attacks targeting remote employees are another significant threat. In addition, personal devices may lack proper security controls and become entry points for attackers.

Secure communication practices are essential. Organizations should require employees to use Virtual Private Networks (VPNs) to encrypt internet traffic. Communication platforms should support end-to-end encryption to ensure confidentiality. Sensitive information should only be shared through approved channels.

Safe remote access guidelines include implementing multi-factor authentication, enforcing strong password policies, and regularly updating operating systems and applications. Endpoint protection software should be installed on all devices accessing organizational resources. Access permissions should follow the principle of least privilege, granting users only the access necessary for their roles.

Employee awareness training is equally important. Workers should be educated about phishing attacks, suspicious links, and secure handling of company information. Regular audits and monitoring of remote access activities can help detect unauthorized behavior.

By combining secure communication technologies, strong authentication mechanisms, endpoint protection, and employee awareness, organizations can create a secure remote working environment while maintaining productivity and business continuity.

---

## 3. Before selling old computers, an organization must ensure data safety. Explain secure data deletion techniques and propose a standard operating procedure for safe device disposal.

When organizations dispose of or sell old computers, they must ensure that sensitive data cannot be recovered by unauthorized individuals. Failure to properly erase data can result in serious security breaches, legal liabilities, and reputational damage.

Several secure data deletion techniques are available. **Data wiping** overwrites existing information multiple times using specialized software. **Cryptographic erasure** destroys encryption keys, rendering encrypted data inaccessible. **Degaussing** removes data from magnetic storage devices through powerful magnetic fields. For highly sensitive information, **physical destruction** methods such as shredding, crushing, or drilling storage devices provide maximum assurance.

A standard operating procedure (SOP) for safe device disposal should begin with inventory identification and classification of devices containing sensitive information. The next step is performing a verified backup of any required data. Appropriate sanitization methods should then be selected based on the sensitivity of the stored information.

After sanitization, verification procedures should confirm that data recovery is impossible. Detailed records should be maintained, documenting the disposal process and personnel involved. If third-party disposal services are used, organizations should ensure they comply with recognized security standards and provide certificates of destruction.

Finally, devices should be physically disposed of or transferred according to organizational policies. Regular audits should be conducted to ensure compliance with disposal procedures.

Implementing secure deletion techniques and a well-defined SOP helps organizations protect confidential information, comply with regulations, and minimize the risks associated with device disposal.

---
