import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';

export default function DashboardScreen() {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const dynamicHeight = Math.min(dimensions.height * 0.2, 160);
  const dynamicPadding = Math.min(dimensions.width * 0.04, 24);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TechGears Stores</Text>
      </View>

      <View style={[styles.gridContainer, { padding: dynamicPadding }]}>
        <View style={styles.row}>
          <View style={[styles.cardWrapper, styles.card1]}>
            <View style={[styles.box, styles.statsBox]}>
              <Text style={styles.boxText}>Stats</Text>
            </View>
            <View style={styles.offBadge}>
              <Text style={styles.offText}>OFF</Text>
            </View>
          </View>
          <View style={[styles.cardWrapper, styles.card2]}>
            <View style={[styles.box, styles.healthBox]}>
              <Text style={styles.boxText}>Health</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.row}>
          <View style={[styles.cardWrapper, styles.card3]}>
            <View style={[styles.box, styles.tasksBox]}>
              <Text style={styles.boxText}>Tasks</Text>
            </View>
          </View>
          <View style={[styles.cardWrapper, styles.card4]}>
            <View style={[styles.box, styles.settingsBox]}>
              <Text style={styles.boxText}>Settings</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.fabWrapper}>
        <TouchableOpacity style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>v1.0.4 Online</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  header: {
    height: 120,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  gridContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  cardWrapper: {
    position: 'relative',
    width: '48%',
    height: 140,
  },
  card1: {
    // Stats card
  },
  card2: {
    // Health card
  },
  card3: {
    // Tasks card
  },
  card4: {
    // Settings card
  },
  box: {
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  statsBox: {
    backgroundColor: '#3498db',
  },
  healthBox: {
    backgroundColor: '#2ecc71',
  },
  tasksBox: {
    backgroundColor: '#e67e22',
  },
  settingsBox: {
    backgroundColor: '#9b59b6',
  },
  offBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#e74c3c',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  offText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  boxText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fabWrapper: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  fab: {
    backgroundColor: '#f1c40f',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  fabIcon: {
    fontSize: 32,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerText: {
    color: '#bdc3c7',
    fontSize: 12,
  },
});
